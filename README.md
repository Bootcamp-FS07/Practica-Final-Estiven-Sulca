# Frontend

## Deployment on EC2 AWS Server

To test the app on the EC2 instance, follow these steps:

1. Open the following URL in your browser: [EC2 Instace URL](https://ec2-18-228-195-16.sa-east-1.compute.amazonaws.com/)


2. Select Advanced and accept the security warning to continue. This happens because the site is using a self-signed SSL certificate.

3. Close the browser tab. This step was just to confirm that the URL is trusted.

4. After accepting the warning, you can proceed to login or sign up. Access the online version of the app here:

https://post4u.vercel.app/login



## Project Overview

This project was generated using Angular CLI version 19.0.6.

### Development Server

To start a local development server, run:

```typescript
ng serve
```
Once the server is running, open your browser and navigate to http://localhost:4200/. The application will automatically reload when you modify any source files.

### Setting API URL

Before running the project, make sure to configure the API URL in the environment files located in `src/environments/`.

For development, update `src/environments/environment.ts`:

```typescript
export const environment = {
  production: false,
  apiURL: 'http://localhost:3000', // Replace with your development API URL
};
```


