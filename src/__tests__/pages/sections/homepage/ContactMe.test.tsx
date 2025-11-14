
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import ContactMe from 'components/pages/sections/homepage/ContactMe';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

describe('ContactMe section', () => {
    it('renders titles and contact cards', () => {
        render(<ContactMe />);

        expect(screen.getByText("Let's start working")).toBeInTheDocument();
        expect(screen.getByText('Contact me')).toBeInTheDocument();

        const emailLink = screen.getByText('Email').closest('a');

        expect(emailLink).toBeInTheDocument();
        expect(emailLink).toHaveAttribute('href', 'mailto:c.plaitano@gmail.com');
        expect(screen.getByText('c.plaitano@gmail.com')).toBeInTheDocument();

        const instagramLink = screen.getByText('Instagram').closest('a');

        expect(instagramLink).toBeInTheDocument();
        expect(instagramLink).toHaveAttribute('href', 'https://ig.me/m/carmineplaitano.it');
        expect(screen.getByText('ig.me/m/carmineplaitano.it')).toBeInTheDocument();

        const whatsappLink = screen.getByText('WhatsApp').closest('a');
        
        expect(whatsappLink).toBeInTheDocument();
        expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/393272061751');
        expect(screen.getByText('+39 327 2061 751')).toBeInTheDocument();
    });
});
