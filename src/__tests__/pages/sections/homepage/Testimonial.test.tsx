import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Testimonial from 'components/pages/sections/homepage/Testimonial';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('Testimonial section', () => {
    it('renders section with id and classes', () => {
        const { container } = render(<Testimonial />);
        const section = container.querySelector('#testimonials');

        expect(section).toBeInTheDocument();

        if (section) {
            expect(section).toHaveAttribute('id', 'testimonials');
            expect(section).toHaveClass('testimonials');
        }
    });

    it('renders headings and paragraphs with translation keys as text', () => {
        render(<Testimonial />);

        expect(screen.getByText('Reviews and')).toBeInTheDocument();
        expect(screen.getByText('Testimonials')).toBeInTheDocument();
    });
});
