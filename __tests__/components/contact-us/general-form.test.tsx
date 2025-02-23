import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import GeneralForm from '@/app/components/contact-us/general-form';

describe('GeneralForm Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<GeneralForm />);
        expect(container).toBeInTheDocument();
    });

    it('updates input fields correctly', () => {
        render(<GeneralForm />);
        
        const nameInput = screen.getByLabelText('Name');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        expect(nameInput).toHaveValue('John Doe');

        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput).toHaveValue('john@example.com');

        const phoneInput = screen.getByLabelText('Phone Number');
        fireEvent.change(phoneInput, { target: { value: '1234567890' } });
        expect(phoneInput).toHaveValue('1234567890');

        const subjectInput = screen.getByLabelText('Subject');
        fireEvent.change(subjectInput, { target: { value: 'Test Subject' } });
        expect(subjectInput).toHaveValue('Test Subject');

        const messageInput = screen.getByLabelText('Message');
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
        expect(messageInput).toHaveValue('Hello, this is a test message.');
    });

    it('renders the submit button correctly', () => {
        render(<GeneralForm />);
        
        const submitButton = screen.getByText('Send Email');
        expect(submitButton).toBeInTheDocument();
    });
});