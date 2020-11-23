import React from 'react'

export const Button = ({ children, ariaLabel, ...rest }) => (
    <button
      type="button"
      class="button"
      aria-label={ariaLabel}
      title={ariaLabel}
      >
        {children}
    </button>
  )

export const InputButton = ({ children, ...rest }) => (
    <input
      type="button"
      class="button"
      value={children}
    />
  )

export const RoleButton = ({ children, ...rest }) => (
    <span 
      role="button" 
      tabindex="0" 
      class="button"
      >
          {children}
    </span>
  )