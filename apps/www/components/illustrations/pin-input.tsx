import { createComponent } from "./create-component"

export const PinInputAnatomy = createComponent((props) => {
  const { palette, ...rest } = props
  return (
    <svg
      width={400}
      height={300}
      viewBox="0 0 400 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <g opacity={0.7}>
        <rect
          width={45}
          height={45}
          transform="translate(74 128)"
          fill={palette[3]}
        />
        <path
          d="M98.75 144.364V156H97.3409V145.841H97.2727L94.4318 147.727V146.295L97.3409 144.364H98.75Z"
          fill={palette[0]}
        />
      </g>
      <g opacity={0.7}>
        <rect
          width={45}
          height={45}
          transform="translate(143 128)"
          fill={palette[3]}
        />
        <path
          d="M162.545 156V154.977L166.386 150.773C166.837 150.28 167.208 149.852 167.5 149.489C167.792 149.121 168.008 148.777 168.148 148.455C168.292 148.129 168.364 147.788 168.364 147.432C168.364 147.023 168.265 146.669 168.068 146.369C167.875 146.07 167.61 145.839 167.273 145.676C166.936 145.513 166.557 145.432 166.136 145.432C165.689 145.432 165.299 145.525 164.966 145.71C164.636 145.892 164.381 146.148 164.199 146.477C164.021 146.807 163.932 147.193 163.932 147.636H162.591C162.591 146.955 162.748 146.356 163.062 145.841C163.377 145.326 163.805 144.924 164.347 144.636C164.892 144.348 165.504 144.205 166.182 144.205C166.864 144.205 167.468 144.348 167.994 144.636C168.521 144.924 168.934 145.312 169.233 145.801C169.532 146.29 169.682 146.833 169.682 147.432C169.682 147.86 169.604 148.278 169.449 148.688C169.297 149.093 169.032 149.545 168.653 150.045C168.278 150.542 167.758 151.148 167.091 151.864L164.477 154.659V154.75H169.886V156H162.545Z"
          fill={palette[0]}
        />
      </g>
      <g opacity={0.7}>
        <rect
          width={45}
          height={45}
          transform="translate(212 128)"
          fill={palette[3]}
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M234.5 160C234 160 233.595 159.595 233.595 159.095L233.595 141.905C233.595 141.405 234 141 234.5 141C235 141 235.405 141.405 235.405 141.905L235.405 159.095C235.405 159.595 235 160 234.5 160Z"
          fill={palette[15]}
        />
      </g>
      <g opacity={0.7}>
        <rect
          width={45}
          height={45}
          transform="translate(281 128)"
          fill={palette[3]}
        />
        <path
          d="M303.318 156.182C302.492 156.182 301.716 156.027 300.989 155.716C300.265 155.405 299.627 154.975 299.074 154.426C298.525 153.873 298.093 153.235 297.778 152.511C297.468 151.788 297.314 151.011 297.318 150.182C297.322 149.352 297.479 148.576 297.79 147.852C298.104 147.129 298.536 146.492 299.085 145.943C299.634 145.39 300.271 144.958 300.994 144.648C301.718 144.337 302.492 144.182 303.318 144.182C304.148 144.182 304.924 144.337 305.648 144.648C306.375 144.958 307.011 145.39 307.557 145.943C308.106 146.492 308.536 147.129 308.847 147.852C309.157 148.576 309.314 149.352 309.318 150.182C309.322 151.011 309.169 151.788 308.858 152.511C308.547 153.235 308.117 153.873 307.568 154.426C307.019 154.975 306.381 155.405 305.653 155.716C304.926 156.027 304.148 156.182 303.318 156.182ZM303.318 154.864C303.966 154.864 304.574 154.742 305.142 154.5C305.71 154.258 306.208 153.922 306.636 153.494C307.064 153.066 307.4 152.57 307.642 152.006C307.884 151.437 308.004 150.831 308 150.188C307.996 149.54 307.873 148.932 307.631 148.364C307.388 147.795 307.053 147.297 306.625 146.869C306.197 146.441 305.701 146.106 305.136 145.864C304.572 145.621 303.966 145.5 303.318 145.5C302.674 145.5 302.07 145.621 301.506 145.864C300.941 146.106 300.445 146.443 300.017 146.875C299.589 147.303 299.252 147.801 299.006 148.369C298.763 148.934 298.64 149.54 298.636 150.188C298.633 150.828 298.752 151.432 298.994 152C299.237 152.564 299.572 153.061 300 153.489C300.432 153.917 300.93 154.254 301.494 154.5C302.063 154.742 302.67 154.864 303.318 154.864Z"
          fill={palette[15]}
        />
      </g>
    </svg>
  )
})
