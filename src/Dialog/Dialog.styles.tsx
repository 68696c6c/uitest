import * as DialogPrimitive from '@radix-ui/react-dialog'
import { styled } from '../theme/stitches.config'

export const DialogOverlay = styled(DialogPrimitive.Overlay, {
  backgroundColor: 'rgba(0 0 0 / 0.5)',
  position: 'fixed',
  inset: 0,
})

export const DialogContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$boxNeutral',
  borderRadius: '$rounder',
  boxShadow: '$highest',
  padding: '$10 $08',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '876px',
  maxHeight: '85vh',
  '&:focus': { outline: 'none' },
})

export const DialogIconButton = styled('button', {
  all: 'unset',
  fontFamily: 'inherit',
  borderRadius: '100%',
  height: 25,
  width: 25,
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 25,
  right: 25,
})
