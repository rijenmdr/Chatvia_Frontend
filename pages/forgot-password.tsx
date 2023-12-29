/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState } from 'react';
import { Stack, Text, Flex } from '@chakra-ui/react';
import Link from 'next/link';

import AuthLayout from '../src/layout/AuthLayout';
import BoxLayout from '../src/layout/BoxLayout';
import EmailForm from '../src/components/ForgotPassword/EmailForm';
import OTPForm from '../src/components/ForgotPassword/OTPForm';
import ChangePassword from '../src/components/ForgotPassword/ChangePassword';

const ForgotPassword = () => {
  const [stage, setStage] = useState(1);
  const [email, setEmail] = useState("");

  return (
    <AuthLayout title="Reset Password" subTitle="Reset Password With Chatvia.">
      <BoxLayout>
        <Stack spacing={6}>
          {stage === 1 && <EmailForm setEmail={setEmail} setStage={setStage}/>}
          {stage === 2 && <OTPForm email={email} setStage={setStage}/>}
          {stage === 3 && <ChangePassword email={email}/>}
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
