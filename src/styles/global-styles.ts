import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
    
    #__next{
        height:100%;
    }

    *{
      padding: 0;
      margin: 0;
      list-style-type:none;
      outline:none;
      box-sizing:border-box;
   }
   

   html{
    height: 100%;
    font-size:${({theme}) => theme.typography.pxToRem(theme.typography.htmlFontSize)};      
    scroll-behavior: smooth;

   }

   

   body{
      min-height: 100%;
      height: 100%;
      font-family: "IRANYekan",sans-serif;
   }

   input{
      font-family: ${({theme}) => theme.typography.fontFamily};
      font-weight:bold;
   }


   button{
      border:none;
      background:none;
      appearance: none;
      font-family: ${({theme}) => theme.typography.fontFamily};
   }


/* stylelint-disable property-no-vendor-prefix */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type=number] {
  -moz-appearance: textfield;
}        

a{
   text-decoration: none;
   color:inherit
}

.MuiInput-root{
   color:#fff;
   max-width:${({theme}) => theme.typography.pxToRem(376)};
   &:after{
      border-color: #fff;
   }
}
.MuiFormLabel-root{
   color:#fff;
   &.Mui-focused{
      color:#fff;
   }
}
`;

export default GlobalStyle;
