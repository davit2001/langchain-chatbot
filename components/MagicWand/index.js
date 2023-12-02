import React from 'react';

const styles = `
svg{
  margin: auto;
}

#lines {
  transform-origin: 53% 46%;
  animation: turn 1.5s forwards infinite linear;
}

@keyframes turn
{
  from{

  transform: scale(1);
  opacity: 1;
}
  to{
  transform: scale(1.5);
  opacity: 0;
}
}

.ster-geel {
  transform-origin: 53% 46%;
  animation: stars 4s forwards infinite linear;
  animation-delay: 500ms;
}

.ster-wit {
  transform-origin: 53% 46%;
  animation: stars 4s forwards infinite linear;
  animation-delay: 500ms;
}

@keyframes stars
{
  from{
  transform: rotate(0deg);
}
  to{
  transform: rotate(360deg);
}
}

#toverstok{
  transform-origin: 15% 70%;
  animation: move 2s alternate infinite;
}

@keyframes move{
  from{
    transform: rotate(-5deg);
  }
  to{
    transform: rotate(5deg);
  }
}

#circle
{
  transform-origin: 50% 50%;
  animation: bigger 2s alternate infinite;
}
@keyframes bigger{
  from{
    transform: scale(1);
  }
  to{
    transform: scale(1.02);
  }
}`;

const MagicWand = () => {
  return (
    <>
      <style>{styles}</style>
      <svg
        width="32"
        height="32"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500">
        <g id="icon">
          <circle id="circle" cx="256" cy="256" r="256" fill="#833ab4" />
          <g id="lines" fill="#FEFEFE">
            <path d="M268.49 131.282c28.104 0 55.07 9.863 76.522 28.03l-2.28 2.696c-20.82-17.63-46.963-27.185-74.243-27.185v-3.541zm118.474 118.476c0 9.94-1.228 19.603-3.536 28.84-2.374 9.507-5.91 18.57-10.44 27.024l-3.11-1.66c4.384-8.184 7.81-16.98 10.123-26.222 2.238-8.948 3.427-18.322 3.427-27.98h3.536v-.002zM316.49 358.102c-7.428 3.294-15.27 5.854-23.428 7.573-7.94 1.673-16.16 2.555-24.574 2.555v-3.536c8.19 0 16.17-.853 23.853-2.474 7.893-1.664 15.5-4.147 22.722-7.35l1.422 3.232h.005zM165.553 192.344c-5.332 8.223-9.545 16.986-12.64 26.067l3.33 1.143c2.996-8.792 7.09-17.294 12.276-25.29l-2.963-1.92h-.004z" />
          </g>
          <g id="toverstok">
            <path
              id="stokje"
              d="M277.124 187.364l34.75 38.5L76.4 438.4c-12.337-12.147-23.446-25.53-33.128-39.958L277.13 187.36l-.006.004z"
              fill="#666"
            />
            <path
              id="top-stokje"
              d="M279.238 182.62l37.575 41.63-85.342 77.03c-4.6 4.152-16.738-1.8-27.118-13.294-10.375-11.494-15.058-24.18-10.46-28.333l85.343-77.03.003-.004z"
              fill="#ECF0F1"
            />
            <path
              id="bovenkant-stokje"
              d="M306.352 195.913c10.375 11.498 15.058 24.18 10.46 28.333-4.597 4.152-16.74-1.8-27.114-13.3-10.375-11.493-15.058-24.18-10.46-28.332 4.597-4.15 16.74 1.802 27.114 13.3z"
              fill="#FFF"
            />
          </g>
          <path
            className="ster-geel"
            d="M328.87 65.746l8.615 26.693 28.052-.053-22.726 16.446 8.722 26.66-22.664-16.532-22.664 16.532 8.72-26.66L292.2 92.388l28.048.052 8.616-26.694h.005z"
            fill="#FAD24D"
          />
          <path
            className="ster-wit"
            d="M191.653 90.944l20.844 27.655 32.697-11.4-19.863 28.366 20.95 27.574-33.12-10.123-19.753 28.44-.607-34.625-33.157-9.995 32.74-11.275-.74-34.62.01.002z"
            fill="#FFF"
          />
          <path
            className="ster-geel"
            d="M355.855 306.3l13.218 22.593 25.55-5.687-17.403 19.555 13.304 22.542-23.972-10.512-17.327 19.622 2.588-26.048-24.015-10.418 25.574-5.588 2.488-26.057h-.005z"
            fill="#FAD24D"
          />
          <path
            className="ster-wit"
            d="M390.832 166.23l8.213 25.44 26.735-.05-21.66 15.672 8.314 25.412-21.602-15.758-21.598 15.758 8.313-25.412-21.66-15.673 26.736.05 8.213-25.44h-.004z"
            fill="#FFF"
          />
          <path
            className="ster-geel"
            d="M147.714 222.98l5.782 17.915 18.825-.033-15.25 11.033 5.854 17.89-15.21-11.094-15.208 11.096 5.854-17.89-15.25-11.034 18.824.033 5.78-17.915z"
            fill="#FAD24D"
          />

          <path
            className="ster-wit"
            d="M243.592 329.14l5.07 15.71 16.51-.033-13.376 9.678 5.133 15.687-13.338-9.73-13.337 9.73 5.133-15.687-13.375-9.678 16.508.033 5.072-15.71z"
            fill="#FFF"
          />
        </g>
      </svg>
    </>
  );
};

export default MagicWand;
