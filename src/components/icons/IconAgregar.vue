<template>
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M13 28C13 29.1046 13.8954 30 15 30C16.1046 30 17 29.1046 17 28V17H28C29.1046 17 30 16.1046 30 15C30 13.8954 29.1046 13 28 13H17V2C17 0.89543 16.1046 0 15 0C13.8954 0 13 0.89543 13 2V13H2C0.89543 13 0 13.8954 0 15C0 16.1046 0.89543 17 2 17H13V28Z"
            fill="#16192C" />
    </svg>
</template>

<script>
  export default {
    name: 'AgregarIcon',
    props: {
      size: {
        type: Number,
        default: 30
      },
      color: {
        type: String,
        default: '##F8F8F8'
      },
    }
  }</script>