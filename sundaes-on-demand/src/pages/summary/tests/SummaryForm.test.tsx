import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event/';
import SummaryForm from '../SummaryForm';

test('Initial Conditions',()=> {
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});
    expect(checkbox).not.toBeChecked();

    const button = screen.getByRole('button', {name: /Confirm order/i});
    expect(button).toBeDisabled();
});

test('Checkbox enables/disables button', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    const checkbox = screen.getByRole('checkbox', {name: /terms and conditions/i});
    const button = screen.getByRole('button', {name: /Confirm order/i});

    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).toBeEnabled();

    await user.click(checkbox);
    expect(button).toBeDisabled();
});

test('popover responds to hove', async () => {
    const user = userEvent.setup();

    // popover starts out hidden
    const nullPopover = screen.queryByText(/no ice cream will actually be delivered/i);
    expect(nullPopover).not.toBeInTheDocument();

    //popover appears on mouseover terms
    const tc = screen.getByText(/terms and conditions/i);
    await user.hover(tc);

    const popover = screen.getByText(/no ice cream will actually be delivered/i);
    expect(popover).toBeInTheDocument();

    //popover disappears on mouse out
    await user.unhover(tc);
    expect(popover).not.toBeInTheDocument();
})


