function isActiveMenuItem(history: { location: { pathname: string } }, path: string): boolean {
    if (history.location.pathname === path) return true;
    return false;
};

export default isActiveMenuItem;