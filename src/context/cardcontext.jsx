import { createContext, useContext, useEffect, useMemo, useReducer } from 'react';

const CartContext = createContext(null);
const STORAGE_KEY = 'parleys-collection:cart';

function readInitialState() {
    if (typeof window === 'undefined') return [];
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? JSON.parse(raw) : [];
    } catch {
        // Corrupt or inaccessible storage shouldn't crash the app
        return [];
    }
}

function cartReducer(state, action) {
    switch (action.type) {
        case 'ADD_ITEM': {
            const existing = state.find((item) => item.id === action.payload.id);
            if (existing) {
                return state.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            return [...state, { ...action.payload, quantity: 1 }];
        }
        case 'INCREMENT':
            return state.map((item) =>
                item.id === action.payload.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
        case 'DECREMENT':
            return state
                .map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
                .filter((item) => item.quantity > 0);
        case 'REMOVE_ITEM':
            return state.filter((item) => item.id !== action.payload.id);
        case 'CLEAR_CART':
            return [];
        default:
            return state;
    }
}

export function CartProvider({ children }) {
    const [cart, dispatch] = useReducer(cartReducer, undefined, readInitialState);

    // Persist on every change so a refresh doesn't wipe the cart
    useEffect(() => {
        try {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        } catch {
            // Storage can fail (private browsing, quota) — cart still works in-memory
        }
    }, [cart]);

    const value = useMemo(() => {
        const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
        const totalPrice = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

        return {
            cart,
            totalCount,
            totalPrice,
            addToCart: (product) => dispatch({ type: 'ADD_ITEM', payload: product }),
            incrementItem: (id) => dispatch({ type: 'INCREMENT', payload: { id } }),
            decrementItem: (id) => dispatch({ type: 'DECREMENT', payload: { id } }),
            removeFromCart: (id) => dispatch({ type: 'REMOVE_ITEM', payload: { id } }),
            clearCart: () => dispatch({ type: 'CLEAR_CART' }),
        };
    }, [cart]);

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
