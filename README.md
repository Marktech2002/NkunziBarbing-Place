# Barber Subscription API

The Barber Subscription API is a RESTful web service designed for managing subscriptions and appointments at a barbershop. This API provides features for user management, subscription handling, appointment scheduling, logging and email notifications to help the admin manage appointments effectively.

## Features

### User Management

- **Registration**: Users can create an account by registering with their details.
- **Authentication**: Secure authentication using JSON Web Tokens (JWT).
- **User Profile**: Users can manage their profiles, including first name, second name, email, and password.

### Subscription Management

- **Subscription Plans**: Users can select monthly subscription plans.
- **Payment Gateway**: Integration with a payment gateway service for processing subscription payments.
- **Subscription Activation**: Successful payment activates the user's subscription.

### Appointment Management

- **Appointment Scheduling**: Users can schedule barber appointments.
- **Appointment Details**: View and modify appointment details.
- **Admin Notifications**: Automatic email notifications to the admin barber when users schedule appointments.


### Email Notifications

- **Email Service Integration**: Seamless integration with an email service provider for sending notifications to the admin barber.
- **Admin Alert**: Email notifications sent to the admin barber whenever a user schedules an appointment.

## Architecture

The Barber Subscription API is structured into multiple components:

1. **User Management**: Register and manage user accounts.
2. **Subscription Management**: Handle subscription creation, retrieval, and cancellation.
3. **Payment Gateway**: Process subscription payments securely.
4. **Appointment Management**: Schedule and modify barbering appointments.
5. **Barber Information**: Provide information about the barber.
6. **Email Notifications**: Send email alerts to the admin barber for appointment scheduling.

## Workflow

1. Users register and log in.
2. Users select a subscription plan and make a payment.
3. Upon successful payment, the subscription is activated.
4. Users schedule barber appointments.
5. Admin barbers receive email notifications about scheduled appointments.

## Installation

To run this API locally, follow these steps:

1. Clone this repository.
2. Install the required dependencies: `npm install`.
3. Set up environment variables.
4. Start the server: `npm start`.
5. The API is accessible at `http://localhost:80`.

## Tests

This project includes comprehensive tests using Jest. To run the tests, use the following command:

```bash
npm test
