import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import AboutMe from 'components/pages/sections/homepage/AboutMe';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('AboutMe section', () => {
    it('renders section with id and classes', () => {
        const { container } = render(<AboutMe />);
        const section = container.querySelector('#about-me');

        expect(section).toBeInTheDocument();

        if (section) {
            expect(section).toHaveAttribute('id', 'about-me');
            expect(section).toHaveClass('about-me');
        }
    });

    it('renders headings and paragraphs with translation keys as text', () => {
        render(<AboutMe />);

        expect(screen.getByText('Something')).toBeInTheDocument();
        expect(screen.getByText('About me')).toBeInTheDocument();

        expect(screen.getByText((content: string) => content.includes('My name is Carmine'))).toBeInTheDocument();
    });
});
