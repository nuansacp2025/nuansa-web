import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import BusinessForm from '@/app/components/contact-us/business-form';

describe('BusinessForm Component', () => {
    it('renders without crashing', () => {
        const { container } = render(<BusinessForm />);
        expect(container).toBeInTheDocument();
    });

    it('updates input fields correctly', () => {
        render(<BusinessForm />);
        
        const nameInput = screen.getByLabelText('Name');
        fireEvent.change(nameInput, { target: { value: 'John Doe' } });
        expect(nameInput).toHaveValue('John Doe');

        const emailInput = screen.getByLabelText('Email');
        fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
        expect(emailInput).toHaveValue('john@example.com');

        const phoneInput = screen.getByLabelText('Phone Number');
        fireEvent.change(phoneInput, { target: { value: '1234567890' } });
        expect(phoneInput).toHaveValue('1234567890');

        const messageInput = screen.getByLabelText('Message');
        fireEvent.change(messageInput, { target: { value: 'Hello, this is a test message.' } });
        expect(messageInput).toHaveValue('Hello, this is a test message.');
    });

    it('renders the category select correctly', () => {
        render(<BusinessForm />);
        
        const categorySelect = screen.getByLabelText('Category');
        expect(categorySelect).toBeInTheDocument();
    });

    it('renders the submit button correctly', () => {
        render(<BusinessForm />);
        
        const submitButton = screen.getByText('Send Email');
        expect(submitButton).toBeInTheDocument();
    });
});
