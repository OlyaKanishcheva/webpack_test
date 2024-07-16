import { ModuleOptions } from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/types';
// import ReactRefreshTypeScript from 'react-refresh-typescript';
import { buildBabelLoader } from './babel/buildBabelLoader';

export function buildLoaders(options: BuildOptions): ModuleOptions['rules'] {
    const isDev = options.mode === 'development';

    const svgLoader = {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: [{
            loader: '@svgr/webpack',
            options: {
                icon: true,
                svgConfig: {
                    plugins: [
                        {
                            name: 'convertColors',
                            params: {
                                currentColor: true,
                            }
                        }
                    ]
                }
            },
        }],
    };

    const assetsLoader = {
        test: /\.(png|jpg|gif|gif)$/i,
        type: 'asset/resource',
    };
    
    const cssLoadersWithModules = {
        loader: 'css-loader',
        options: {
            modules: {
                localIdentName: isDev ? '[path][name]__[local]' : '[hash:base64:8]',
            }
        },
    };

    const scssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
            cssLoadersWithModules,
            'sass-loader'
        ],
    };

    // const tsLoader = {
    //     test: /\.tsx?$/,
    //     use: [
    //         {
    //             loader: 'ts-loader',
    //             options: {
    //                 transpileOnly: true,
    //                 getCustomTransformers: () => ({
    //                     before: [isDev && ReactRefreshTypeScript()].filter(Boolean),
    //                 })
    //             }
    //         }
    //     ],
    //     exclude: /node_modules/,
    // };

    const babelLoader = buildBabelLoader(options);

    return ([
        svgLoader,
        assetsLoader,
        scssLoader,
        // tsLoader,
        babelLoader,
    ])
}