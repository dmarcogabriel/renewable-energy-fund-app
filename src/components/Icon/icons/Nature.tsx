import React from 'react';
import {Svg, Path} from 'react-native-svg';
import {IIcon} from '@models/IIconInterface';

export const Nature = ({color = '#000'}: IIcon) => (
  <Svg width="13" height="13" viewBox="0 0 13 13" fill="none">
    <Path
      d="M2.75 0.90625L2.5 1.14062C2.5 1.14062 0.5 2.96289 0.5 5.28125C0.5 7.92383 2.85938 9.07812 2.85938 9.07812L3.40625 9.34375L3.5625 8.75C3.5625 8.75 3.69141 8.21094 4.1875 7.64062C4.68359 7.07031 5.50391 6.5 7 6.5C9.22852 6.5 10.7832 7.69727 11.2656 8.09375C10.8809 8.63281 9.44727 10.5 7 10.5C5.88477 10.5 5.13867 10.2578 4.6875 10.0625C5.33203 9.55859 6 9.27344 6.60938 9.10938C7.89453 8.76367 8.89062 8.98438 8.89062 8.98438L9.10938 8.01562C9.10938 8.01562 8.79688 7.93945 8.29688 7.92188C7.79688 7.9043 7.10352 7.9375 6.34375 8.14062C4.82422 8.54883 2.99609 9.67773 1.8125 12.2969L2.71875 12.7031C3.07617 11.9102 3.48633 11.291 3.92188 10.7969C4.39844 11.0391 5.47656 11.5 7 11.5C10.4453 11.5 12.4219 8.26562 12.4219 8.26562L12.6406 7.92188L12.3438 7.64062C12.3438 7.64062 10.0742 5.5 7 5.5C6.44922 5.5 5.98047 5.58203 5.54688 5.70312C5.61914 5.26562 5.6543 4.75195 5.51562 4.10938C5.05664 1.96484 3.0625 1.04688 3.0625 1.04688L2.75 0.90625ZM2.9375 2.17188C3.33008 2.40039 4.25 2.99609 4.53125 4.3125C4.67188 4.9707 4.62109 5.48633 4.53125 5.82812C4.44141 6.16992 4.34375 6.29688 4.34375 6.29688C4.00977 6.51758 3.65625 6.73438 3.4375 6.98438C3.38477 7.04492 3.3418 7.11133 3.29688 7.17188C3.26758 6.87695 3.24609 6.58008 3.25 6.29688C3.25781 5.56836 3.32812 4.98438 3.32812 4.98438L2.34375 4.84375C2.34375 4.84375 2.25977 5.48438 2.25 6.28125C2.24609 6.62695 2.25977 7.01172 2.29688 7.39062C1.88867 6.97656 1.5 6.32812 1.5 5.28125C1.5 3.82617 2.57422 2.57031 2.9375 2.17188Z"
      fill={color}
    />
  </Svg>
);
