import { throttle } from "lodash";
import { useEffect, useState } from "react";


const useBreakpoint = (getDeviceConfig: any) => {
    const [brkPnt, setBrkPnt] = useState(() => getDeviceConfig(window.innerWidth));

    useEffect(() => {
        const calcInnerWidth = throttle(function () {
            setBrkPnt(getDeviceConfig(window.innerWidth))
        }, 200);
        window.addEventListener('resize', calcInnerWidth);
        return () => window.removeEventListener('resize', calcInnerWidth);
    }, []);

    return brkPnt;
}
export default useBreakpoint;