import { useRouter } from 'next/router';


function Link({ children, href }) {
    // Using the React Router 
    const { pathname } = useRouter();
    const isActive = pathname === href;
    return (
        // Line 5 uses the the short circuit method to compare the value using the concept of if-else
        <a href = { href }
        className = { `navbar-link ${isActive && "is-active"}`} >
          {children}
        <style jsx>{`
          .navbar-link {
            color: var(--color-tertiary);
            font-size: 16px;
            font-weight: 700;
            line-height: 19px;
            text-align: center;

          }

          .is-active {
            font-size: 1.8rem;
            color: var(--color-secondary);
            position: relative;
          }

          .is-active::before {
            content: "";
            height: 1rem;
            width: 1rem;
            background-color: var(--color-secondary);
            position: absolute;
            bottom: -1.5rem;
            left: 50%;
            transform: translateX(-50%);
          }
      `} </style>
      </a>
    );
}


export default Link;