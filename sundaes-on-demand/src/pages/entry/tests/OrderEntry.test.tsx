import { render, screen } from '@testing-library/react';
import OrderEntry from '../OrderEntry';
import { rest } from 'msw';
import { server } from '../../../mocks/server';

test('handles error for api routes', async () => {
    server.resetHandlers(
        rest.get('http://localhost:3030/scoops', (req, res, ctx) => {
            res(ctx.status(500))
        }),
        rest.get('http://localhost:3030/toppings', (req, res, ctx) => {
            res(ctx.status(500))
        })
    );

    render(<OrderEntry setOrderPhase={() => {}} />);

    const alerts = await screen.findAllByRole('alert', {name: 'An unexpected error occured'});

    expect(alerts).toHaveLength(2);
})