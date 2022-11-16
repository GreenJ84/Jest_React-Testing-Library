import React from 'react';
import { render, screen } from '@testing-library/react';
import Options from '../Options';

test('Displays image for scoop options', async ()=> {
    
    render(<Options optionType="scoops" />);

    // Find images
    const scoopImages: HTMLImageElement[] = await screen.findAllByRole('img', { name: /scoop$/i});
    expect(scoopImages).toHaveLength(2)

    // Confirm alt text of images
    const altText: string[] = scoopImages.map((element) => element.alt)
    expect(altText).toEqual(['Chococlate scoop', 'Vanilla scoop']);

})

test('Displays images for toppings options', async () => {

    render(<Options optionType='toppings' />);

    const toppingImages: HTMLImageElement[] = await screen.findAllByRole('img', { name: /topping$/i });
    expect(toppingImages).toHaveLength(3);

    // Confirm the altText of images
    const altText: string[] = toppingImages.map(element => element.alt)
    expect(altText).toEqual([

    ])
})