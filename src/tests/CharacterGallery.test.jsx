import React from 'react';
import CharacterGallery from '../components/CharacterGallery'
// import { describe, it } from '@jest/globals';
import { render } from '@testing-library/react';

it('CharacterGallery Component Renders Without Error', () => {
    render(<CharacterGallery />);
});