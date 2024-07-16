import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './types/types';

export function buildDevServer(options: BuildOptions): DevServerConfiguration {
    return ({
        open: true,
        port: options.port ?? 3000,
        // на проде настроить проксирование в nginx на index.html
        historyApiFallback: true,
        // обновление без перезагрузки страницы
        hot: true,
    })
}