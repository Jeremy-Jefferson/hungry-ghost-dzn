import '@testing-library/jest-dom';

// React 19 compatibility fix for @testing-library/react
// This ensures the act function is available globally
import { act } from 'react';
globalThis.act = act;
