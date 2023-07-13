export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')];

export const server_loads = [];

export const dictionary = {
	"/": [2],
	"/about": [4],
	"/contact": [5],
	"/[slug]": [3]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};