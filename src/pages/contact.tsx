import type { HeadFC } from "gatsby";
import React from "react";
import { Layout } from "../components";
import styled from "styled-components";
import { colors } from "../utils";

const Form = styled.form`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 620px;
  padding: 16px;
  margin: 64px auto;
  border: 1px solid ${colors.gray6};
  border-radius: 4px;
`;

const Label = styled.label`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;

  span {
    text-transform: none;
  }
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid ${colors.gray6};
  border-radius: 4px;
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const SubmitButton = styled.button`
  align-self: flex-end;
`;

const ContactPage = () => (
  <Layout>
    <Form data-netlify="true">
      <FormField>
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="text" />
      </FormField>
      <FormField>
        <Label htmlFor="message">
          Message <span>(optional)</span>
        </Label>
        <Input as="textarea" id="message" name="message" rows={3} />
      </FormField>
      <SubmitButton type="submit">Submit</SubmitButton>
    </Form>
  </Layout>
);

export default ContactPage;

export const Head: HeadFC = () => <title>Contact</title>;
