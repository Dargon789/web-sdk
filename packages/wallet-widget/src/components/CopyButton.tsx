import { Button, CheckmarkIcon, CopyIcon } from '@0xsequence/design-system'
import { useClipboard } from '@0xsequence/hooks'
import type { ComponentProps } from 'react'

type ButtonProps = ComponentProps<typeof Button>

interface CopyButtonProps extends ButtonProps {
  text: string
  buttonVariant: 'icon' | 'with-label'
}

export const CopyButton = (props: CopyButtonProps) => {
  const { buttonVariant = 'icon', text, size = 'xs', ...rest } = props
  const [isCopied, setCopied] = useClipboard({ timeout: 4000 })

  const label = isCopied ? 'Copied!' : 'Copy'

  return (
<<<<<<< HEAD
    <Button
      size={size!}
      leftIcon={isCopied ? CheckmarkIcon : CopyIcon}
      label={buttonVariant === 'with-label' ? label : undefined}
      variant={buttonVariant === 'icon' ? 'ghost' : 'glass'}
      onClick={() => setCopied(text)}
      {...rest}
    />
=======
    <div className="flex flex-row gap-1 items-center hover:opacity-80 cursor-pointer" onClick={() => setCopied(text)}>
      {isCopied ? <CheckmarkIcon size={size} /> : <CopyIcon size={size} />}
      {includeLabel && (
        <Text color="primary" fontWeight="medium" variant="normal">
          {label}
        </Text>
      )}
    </div>
    // <Button
    //   size={size!}
    //   leftIcon={isCopied ? CheckmarkIcon : CopyIcon}
    //   label={buttonVariant === 'with-label' ? label : undefined}
    //   variant={buttonVariant === 'icon' ? 'ghost' : buttonVariant === 'text' ? 'text' : 'glass'}
    //   onClick={() => setCopied(text)}
    //   {...rest}
    // />
>>>>>>> upstream/master
  )
}
