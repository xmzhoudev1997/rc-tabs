import { useEffect, useRef } from "react";

export interface TabDrag_PARAMS {
    /**
     * 滚动容器，第一层子节点为拖拽对象
     */
    container?: HTMLElement | null;
    /**
     * 拖拽放置区的div样式
     */
    placeholderClass?: string;
    /**
     * 拖拽触发的元素样式，适用于仅拖拽元素的开头位置触发拖拽时，默认任何位置触发
     */
    dragClass?: string;
    /**
     * 元素拖拽中的样式
     */
    draggingClass?: string;
    /**
     * 拖拽方向
     * @default 'x'
     */
    asix?: 'x' | 'y';
    /**
     * 鼠标放到容器边缘触发滚动时每次滚动步长
     * @default 2
     */
    dragScrollStep?: number;
    /**
     * 鼠标放到容器边缘多少时触发滚动
     * @default 20
     */
    dragScrollTrigger?: number;
    /**
     * 拖拽元素重叠多少时触发移动位置
     * @default 20
     */
    dragStartTrigger?: number;
    /**
     * 拖拽元素移动动画
     * @default 'all 400ms linear(0, 0, 1, 1) 0s'
     */
    transition?: string;
    /**
     * 拖拽后触发
     * @default -
     */
    onDragEnd?: (startIndex: number, endIndex: number) => void;
}

export default (params: TabDrag_PARAMS) => {
    const { current: dragRef } = useRef<{
        node: HTMLElement | null,
        positions: number[],
        start: number,
        index: number,
        position: number,
        endIndex: number,
        scroll: number,
        drag: boolean,
    }>({
        node: null,
        positions: [],
        start: -1,
        index: -1,
        position: 0,
        endIndex: -1,
        scroll: 0,
        drag: false,
    });
    const handleDragStart = (node: HTMLElement, position: number) => {
        const { dragClass = '', container, asix = 'x' } = params;
        if (dragRef.node || !node || !container) {
            return;
        }
        if (dragClass && !node.classList.contains(dragClass)) {
            return;
        }
        const rect = container.getBoundingClientRect();
        dragRef.positions = [];
        dragRef.scroll = asix === 'x' ? container.scrollWidth : container.scrollHeight;
        if (container.contains(node)) {
            (container.childNodes as unknown as HTMLElement[]).forEach((n, index) => {
                if (n.contains(node)) {
                    dragRef.node = n;
                    dragRef.start = position - (asix === 'x' ? rect.left : rect.top) + (asix === 'x' ? container.scrollLeft : container.scrollTop);
                    dragRef.index = index;
                }
            });
        }
    }
    const handleDragEnd = (e?: Event) => {
        const { container, draggingClass = '' } = params;
        if (!container || !dragRef.node) {
            return;
        }
        if (dragRef.endIndex > -1 && dragRef.index > -1 && params.onDragEnd && dragRef.endIndex !== dragRef.index) {
            params.onDragEnd(dragRef.index, dragRef.endIndex);
        }
        dragRef.drag = false;
        container.style.userSelect = '';
        dragRef.node.style.transform = '';
        dragRef.node.style.zIndex = '';
        dragRef.node.style.pointerEvents = '';
        dragRef.node.classList.remove(draggingClass);
        dragRef.node = null;
        dragRef.positions = [];
        dragRef.start = -1;
        dragRef.endIndex = -1;
        dragRef.position = -1;
        dragRef.index = -1;
        (container.childNodes as unknown as HTMLElement[]).forEach((n) => {
            n.style.transform = '';
            n.style.transition = '';
            n.style.transitionDuration = '';
            n.style.transitionTimingFunction = '';
        });
    }

    const handleDragging = (position: number) => {
        const { draggingClass = '', container, asix = 'x', dragStartTrigger = 20, transition = 'all 400ms linear(0, 0, 1, 1) 0s' } = params;
        if (!dragRef.node || !container) {
            return;
        }
        if (!dragRef.drag) {
            dragRef.drag = true;
            dragRef.node.style.pointerEvents = 'none';
            const dragPos = asix === 'x' ? dragRef.node.offsetLeft : dragRef.node.offsetTop;
            container.style.userSelect = 'none';
            (container.childNodes as unknown as HTMLElement[]).forEach((n, index) => {
                const pos = asix === 'x' ? n.offsetLeft : n.offsetTop;
                n.style.transition = transition;
                if (index < dragRef.index) {
                    dragRef.positions.push(pos - dragPos + (asix === 'x' ? dragRef.node?.offsetWidth || 0 : dragRef.node?.offsetHeight || 0) - dragStartTrigger);
                } else if (index > dragRef.index) {
                    dragRef.positions.push(pos - dragPos - (asix === 'x' ? dragRef.node?.offsetWidth || 0 : dragRef.node?.offsetHeight || 0) + dragStartTrigger);
                } else {
                    n.style.transition = '';
                    dragRef.positions.push(0);
                }
            });
        }
        const rect = container.getBoundingClientRect();
        const x = position - (asix === 'x' ? rect.left : rect.top) + (asix === 'x' ? container.scrollLeft : container.scrollTop);
        const dx = x - dragRef.start;
        dragRef.node.style.transform = `translate${asix.toUpperCase()}(${dx}px)`;
        dragRef.node.style.zIndex = '1';
        if (!dragRef.node.classList.contains(draggingClass)) {
            dragRef.node.classList.add(draggingClass);
        }
        let endIndex = dragRef.index;
        if (dx > 0) {
            endIndex = dragRef.positions.findIndex(d => dx < d) - 1;
            if (endIndex === -2) {
                endIndex = container.children.length - 1;
            }
        } else if (dx < 0) {
            endIndex = dragRef.positions.findIndex(d => dx < d);
            if (endIndex === -1) {
                endIndex = 0;
            }
        }
        let delay = 0;
        if (dragRef.index > -1 && endIndex > -1) {
            dragRef.endIndex = endIndex;
            (container.childNodes as unknown as HTMLElement[]).forEach((n, index) => {
                if (index !== dragRef.index) {
                    n.style.transform = '';
                }
                if (index > dragRef.index && index <= endIndex) {
                    delay += 10;
                    n.style.transform = `translate${asix.toUpperCase()}(${-1 * (dragRef.node?.[asix === 'x' ? 'offsetWidth' : 'offsetHeight'] || 0)}px)`
                }
                if (index < dragRef.index && index >= endIndex) {
                    delay += 10;
                    n.style.transform = `translate${asix.toUpperCase()}(${dragRef.node?.[asix === 'x' ? 'offsetWidth' : 'offsetHeight'] || 0}px)`
                }
            });
        } else {
            dragRef.endIndex = -1;
        }
        handleDragScroll(dragRef.position);
    }
    const handleDragScroll = (position: number) => {
        const { container, asix = 'x', dragScrollStep = 2, dragScrollTrigger = 20, } = params;
        if (!dragRef.node || !container) {
            return;
        }
        const rect = container.getBoundingClientRect();
        if (asix === 'x') {
            if (rect.left + dragScrollTrigger > position && container.scrollLeft > 0) {
                container.scrollLeft = Math.max(container.scrollLeft - dragScrollStep, 0);
            } else if (rect.right - dragScrollTrigger < position && container.scrollLeft + container.offsetWidth < dragRef.scroll) {
                container.scrollLeft = Math.min(container.scrollLeft + dragScrollStep, dragRef.scroll - container.offsetWidth);
            }
        } else {
            if (rect.top + dragScrollTrigger > position && container.scrollTop > 0) {
                container.scrollTop = Math.max(container.scrollTop - dragScrollStep, 0);
            } else if (rect.bottom - dragScrollTrigger < position && container.scrollTop + container.offsetHeight < dragRef.scroll) {
                container.scrollTop = Math.min(container.scrollTop + dragScrollStep, dragRef.scroll - container.offsetHeight);
            }
        }
    }
    const handleMouseDown = (e: Event) => {
        const { asix = 'x' } = params;
        handleDragStart(e.target as HTMLElement, (e as any)[asix]);

    }
    const handleMouseUp = (e: Event) => {
        handleDragEnd(e);
    }
    const handleMouseMove = (e: Event) => {
        const { asix = 'x' } = params;
        dragRef.position = (e as any)[asix];
        handleDragging(dragRef.position);
    }
    const handleMouseLeave = (e: Event) => {
        const { container } = params;
        if (e.target === container) {
            handleDragEnd();
        }
    }
    const handleScroll = (e: Event) => {
        handleDragging(dragRef.position);
    }
    const handleInit = () => {
        const { container } = params;
        if (!container) {
            return;
        }
        container.addEventListener('mousedown', handleMouseDown);
        container.addEventListener('mouseup', handleMouseUp);
        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);
        container.addEventListener('scroll', handleScroll);

    }
    const handleDestory = () => {
        const { container } = params;
        if (!container) {
            return;
        }
        container.removeEventListener('mousedown', handleMouseDown);
        container.removeEventListener('mouseup', handleMouseUp);
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
        container.removeEventListener('scroll', handleScroll);

    }
    useEffect(() => {
        handleInit();
        return handleDestory;
    }, [params.container])
}
