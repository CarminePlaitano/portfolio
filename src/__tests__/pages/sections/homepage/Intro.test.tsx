import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi } from 'vitest';
import Intro from 'components/pages/sections/homepage/Intro';

vi.mock('react-i18next', () => ({
    useTranslation: () => ({
        t: (key: string) => key,
    }),
}));

vi.mock('components/ui/LangSelector', () => ({
    __esModule: true,
    default: () => <div data-testid="lang-selector">LangSelector</div>
}));

vi.mock('assets/image/cp_photo.png', () => ({ default: 'cp_photo.png' }));
vi.mock('assets/CarminePlaitano-CV(EN).pdf', () => ({ default: 'CarminePlaitano-CV(EN).pdf' }));

vi.mock('react-icons/bs', async () => {
    const React = await vi.importActual('react') as typeof import('react');
    
    return {
        BsLinkedin: () => React.createElement('span', { 'data-testid': 'linkedin' }, 'in'),
        BsInstagram: () => React.createElement('span', { 'data-testid': 'instagram' }, 'ig'),
        BsGithub: () => React.createElement('span', { 'data-testid': 'github' }, 'gh'),
    }
});

describe('Intro section', () => {
    it('renders headings and name', () => {
        render(<Intro />);

        expect(screen.getByText("Hey! I'm")).toBeInTheDocument();
        expect(screen.getByText('Carmine Plaitano')).toBeInTheDocument();
        expect(screen.getByText('Full Stack Web Developer')).toBeInTheDocument();
    });

    it('has CV and contact buttons with correct hrefs and attributes', () => {
        render(<Intro />);

        const cvLink = screen.getByRole('link', { name: 'Read CV' }) as HTMLAnchorElement;

        expect(cvLink).toBeInTheDocument();
        expect(cvLink).toHaveAttribute('href', 'CarminePlaitano-CV(EN).pdf');
        expect(cvLink).toHaveAttribute('target', '_blank');

        const contactLink = screen.getByRole('link', { name: "Let's Talk" }) as HTMLAnchorElement;

        expect(contactLink).toBeInTheDocument();
        expect(contactLink).toHaveAttribute('href', '#contact-me');
    });

    it('renders social links with correct hrefs and attributes', () => {
        render(<Intro />);

        expect(screen.getByTestId('linkedin').closest('a')).toHaveAttribute('href', 'https://www.linkedin.com/in/carmine-plaitano-45b286218/');
        expect(screen.getByTestId('github').closest('a')).toHaveAttribute('href', 'https://github.com/CarminePlaitano');
        expect(screen.getByTestId('instagram').closest('a')).toHaveAttribute('href', 'https://www.instagram.com/carmineplaitano.it/');
    });

    it('renders LanguageSelector', () => {
        render(<Intro />);
        
        expect(screen.getByTestId('lang-selector')).toBeInTheDocument();
    });
})
