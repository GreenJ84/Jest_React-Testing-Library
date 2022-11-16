import { render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Options from '../Options'

test('update scoop subtotal when scoops change', async () => {
    const user = userEvent.setup();

    render(<Options optionType='scoops'/>);

    // total starts out at $0.00
    const scoopSub = screen.getByText('Scoop total: $', {exact: false});

    expect(scoopSub).toHaveTextContent('0.00')

    // update vanilla scoops to 1, check subtotal
    const vanillaInput = await screen.findByRole('spinbutton', { name: 'Vanilla' })

    await user.clear(vanillaInput);
    await user.type(vanillaInput, "1")

    expect(scoopSub).toHaveTextContent('2.00')


    // update chocalte to 2, recheck subtotals
    const chocoInput = await screen.findByRole('spinbutton', { name: 'Chocolate' })

    await user.clear(chocoInput);
    await user.type(chocoInput, "2")

    expect(scoopSub).toHaveTextContent('6.00')
})