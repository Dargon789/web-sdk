import React, { useState } from 'react'
import {
  Box,
  Button,
  Text,
  Spinner,
  PINCodeInput
} from '@0xsequence/design-system'


export interface WaasCodeInputContentProps {
  isLoading: boolean
  onVerify: (code: string) => void
}

export const WaasCodeInputContent = ({
  isLoading,
  onVerify
}: WaasCodeInputContentProps) => {
  const [waasEmailPinCode, setWaasEmailPinCode] = useState<string[]>([])

  return (
    <>
      <Box paddingY="6" alignItems="center" justifyContent="center" flexDirection="column">
        <Text marginTop="5" marginBottom="4" variant="normal" color="text80">
          Enter code received in email.
        </Text>
        <PINCodeInput value={waasEmailPinCode} digits={6} onChange={setWaasEmailPinCode} />

        <Box gap="2" marginY="4" alignItems="center" justifyContent="center" style={{ height: '44px' }}>
          {isLoading ? (
            <Spinner />
          ) : (
            <Button
              variant="primary"
              disabled={waasEmailPinCode.includes('')}
              label="Verify"
              onClick={() => onVerify(waasEmailPinCode.join(''))}
              data-id="verifyButton"
            />
          )}
        </Box>
      </Box>
    </>
  )
}