/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { Stack, Text, Flex } from '@chakra-ui/react';
import AuthLayout from '../src/layout/AuthLayout';
import BoxLayout from '../src/layout/BoxLayout';
import Link from 'next/link';
import EmailForm from '../src/components/ForgotPassword/EmailForm';
import OTPForm from '../src/components/ForgotPassword/OTPForm';
import ChangePassword from '../src/components/ForgotPassword/ChangePassword';

const ForgotPassword = () => {
  const [stage, setStage] = useState(1);
  return (
    <AuthLayout title="Reset Password" subTitle="Reset Password With Chatvia.">
      <BoxLayout>
        <Stack spacing={6}>
          {stage === 1 && <EmailForm />}
          {stage === 2 && <OTPForm />}
          {stage === 3 && <ChangePassword />}
        </Stack>
      </BoxLayout>

      <Flex mt="2rem" justifyContent="center">
        <Text fontSize="md" color="gray.500">
          Remember It ?
        </Text>
        <Link href="/login" passHref>
          <Text px={1} color="brand.500">
            Sign in
          </Text>
        </Link>
      </Flex>
    </AuthLayout>
  );
};

export default ForgotPassword;
