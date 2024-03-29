import { TABS_NAV, TABS_NAV_REF } from ".././../tant-tab-nav/props";

export default (
    func: TABS_NAV_REF,
    onTabAdd: TABS_NAV['onTabAdd']
) => {
    const handleAdd = async () => {
        const tab = onTabAdd ? await onTabAdd() : null;
        if (tab && func.add) {
            func.add(tab);
        }
    }
    return {
        handleAdd,
    };
}