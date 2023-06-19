import { Gauge } from 'prom-client';
declare const renderTime: Gauge<"path">;
declare const requestTime: Gauge<"path">;
declare const totalTime: Gauge<"path">;
export { renderTime, requestTime, totalTime };
