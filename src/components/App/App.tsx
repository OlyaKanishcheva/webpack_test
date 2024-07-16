import { calc } from '../../test';
import { useCallback, useState } from 'react';
import * as classes from './App.module.scss';
import { Outlet, Link } from 'react-router-dom';
import { Posters } from '../Posters/Posters';

export const App = () => {
    const [count, setCount] = useState<number>(0);

    const clickHandler = useCallback((): void => {
        setCount((prev) => prev + 1);
    }, []);

    if (__ENV__ === 'development') {
        console.log('dev mode');
    }

    return (
        <div data-testid={"App.DataTestId"}>
            <Link to={'/'}>
                Main
            </Link>
            <br />
            <Link to={'/about'}>
                About
            </Link>
            <br />
            <Link to={'/shop'}>
                Shop
            </Link>
            <div className={classes.value}>
                Hey
                {' '}
                {`${__PLATFORM__}`}
                {' '}
                {calc(30, 3)}
                {' counter '}
                {count}
            </div>
            <button
                className={classes.button}
                onClick={clickHandler}
            >
                <span>
                    Click me
                </span>
            </button>
            <Posters />
            <Outlet />
        </div>
    )
}