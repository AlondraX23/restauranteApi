<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template >
  <!-- Navbar -->
  <nav class="navbar bg-primario" style="height: 64px; vertical-align: middle;">
    <div class="container-fluid mx-2">
      <a class="nb-brand" href="#">
        <svg style="vertical-align: -5px; margin-right: 8px;" width="66" height="38" viewBox="0 0 66 38"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M60.9623 30.8971C60.9759 31.0794 60.9877 31.2621 60.9978 31.4452C61.0449 32.303 60.3429 33 59.4826 33H6.51748C5.65713 33 4.95516 32.303 5.00226 31.4452C5.01232 31.2621 5.02414 31.0794 5.03771 30.8971C5.04391 30.814 5.05046 30.7309 5.05738 30.648C5.14238 29.6289 5.71018 28.7657 6.51748 28.2637C6.66115 28.1744 6.81242 28.0965 6.96989 28.0313C6.99587 28.0205 7.02201 28.0101 7.04833 28C7.14448 27.9632 7.24282 27.931 7.34303 27.9037C6.33489 27.1273 5.86871 25.7768 6.27742 24.4953C6.30209 24.4179 6.3271 24.3407 6.35243 24.2636C6.79495 22.917 7.3368 21.6157 7.96919 20.3683C8.00723 20.2933 8.0456 20.2185 8.08429 20.1438C8.70327 18.9498 9.98901 18.3248 11.2512 18.4878C10.6193 17.3851 10.7077 15.9604 11.5766 14.9338C11.6288 14.8721 11.6813 14.8106 11.7341 14.7494C12.653 13.6826 13.6511 12.6858 14.7193 11.7679C14.7819 11.7142 14.8447 11.6606 14.9078 11.6074C15.9358 10.7397 17.3626 10.6515 18.4669 11.2825C18.3037 10.0221 18.9296 8.73821 20.1253 8.12012C20.195 8.08409 20.2649 8.04834 20.3349 8.01288C21.5916 7.37662 22.9031 6.83188 24.2605 6.38763C24.3346 6.3634 24.4088 6.33947 24.4831 6.31584C25.7664 5.90772 27.1189 6.37323 27.8964 7.37992C28.231 6.15393 29.303 5.20915 30.6446 5.09756C30.7214 5.09118 30.7982 5.0851 30.875 5.07934C31.577 5.02674 32.2857 5 33 5C33.7144 5 34.423 5.02674 35.125 5.07934C35.2019 5.0851 35.2787 5.09118 35.3554 5.09756C36.697 5.20915 37.769 6.15393 38.1036 7.37992C38.8812 6.37323 40.2336 5.90772 41.517 6.31584C41.5913 6.33947 41.6655 6.3634 41.7395 6.38763C43.0969 6.83188 44.4084 7.37662 45.6651 8.01287C45.7352 8.04834 45.805 8.08409 45.8747 8.12012C47.0704 8.7382 47.6964 10.0221 47.5331 11.2824C48.6374 10.6515 50.0642 10.7397 51.0922 11.6074C51.1553 11.6606 51.2181 11.7141 51.2807 11.7679C52.3489 12.6857 53.347 13.6826 54.266 14.7494C54.3187 14.8106 54.3712 14.8721 54.4234 14.9338C55.2924 15.9603 55.3807 17.3851 54.7489 18.4878C56.011 18.3248 57.2968 18.9498 57.9158 20.1438C57.9544 20.2184 57.9928 20.2933 58.0309 20.3683C58.6632 21.6157 59.2051 22.917 59.6476 24.2636C59.6729 24.3407 59.698 24.4179 59.7226 24.4953C60.1313 25.7768 59.6651 27.1273 58.657 27.9037C58.7572 27.931 58.8556 27.9632 58.9517 28C58.978 28.0101 59.0042 28.0205 59.0302 28.0313C59.1876 28.0965 59.3389 28.1744 59.4826 28.2637C60.2899 28.7656 60.8577 29.6289 60.9427 30.648C60.9496 30.7309 60.9561 30.814 60.9623 30.8971ZM64.774 26.6918C65.4081 27.7319 65.8169 28.9324 65.9254 30.2324C65.9514 30.5443 65.973 30.8573 65.9903 31.1711C66.205 35.0826 63.0193 38 59.4826 38H6.51748C2.98072 38 -0.204988 35.0826 0.00978347 31.1711C0.0270168 30.8572 0.0486648 30.5443 0.0746829 30.2324M64.774 26.6918C64.9635 25.4871 64.883 24.2201 64.4862 22.976C63.9177 21.1935 63.2023 19.4776 62.3547 17.8426C61.7544 16.6846 60.9151 15.7337 59.9295 15.0174C59.6417 13.8345 59.0816 12.6978 58.2397 11.7034C57.0441 10.2908 55.7317 8.98036 54.3173 7.78652C53.3212 6.94578 52.1832 6.38695 50.9992 6.10038C50.2813 5.11527 49.329 4.27719 48.1707 3.67845C46.534 2.83242 44.8164 2.11836 43.0323 1.55098C41.7877 1.15517 40.5194 1.07519 39.3132 1.26553C38.2715 0.631237 37.0697 0.222875 35.7698 0.114763C34.8549 0.0386686 33.9311 0 33 0C32.0689 0 31.1451 0.0386686 30.2302 0.114763C28.9304 0.222875 27.7286 0.631236 26.6868 1.26553C25.4806 1.07519 24.2124 1.15517 22.9678 1.55098C21.1836 2.11836 19.466 2.83242 17.8293 3.67845C16.671 4.27719 15.7187 5.11527 15.0008 6.10039C13.8168 6.38695 12.6788 6.94579 11.6828 7.78652C10.2684 8.98036 8.95599 10.2908 7.7603 11.7034C6.91848 12.6979 6.35835 13.8345 6.0705 15.0174C5.08492 15.7337 4.24566 16.6846 3.64533 17.8426C2.79775 19.4776 2.08232 21.1935 1.51382 22.976C1.11704 24.2201 1.0365 25.4871 1.22606 26.6918C0.59195 27.7319 0.183125 28.9324 0.0746829 30.2324"
            fill="#F8F8F8" />
          <path
            d="M60.9978 31.4452C61.0449 32.303 60.3429 33 59.4826 33H6.51748C5.65713 33 4.95516 32.303 5.00226 31.4452C5.01691 31.1785 5.03529 30.9128 5.05738 30.648C5.16912 29.3083 6.11527 28.2378 7.34303 27.9037C6.33489 27.1273 5.86871 25.7768 6.27742 24.4953C6.75915 22.9848 7.36553 21.5303 8.08429 20.1438C8.70327 18.9498 9.98901 18.3248 11.2512 18.4878C10.6193 17.3851 10.7077 15.9604 11.5766 14.9338C12.592 13.7343 13.7066 12.6213 14.9078 11.6074C15.9358 10.7397 17.3626 10.6515 18.4669 11.2825C18.3037 10.0221 18.9296 8.73821 20.1253 8.12012C21.5138 7.4024 22.9704 6.79688 24.4831 6.31584C25.7664 5.90772 27.1189 6.37323 27.8964 7.37992C28.231 6.15393 29.303 5.20915 30.6446 5.09756C31.4218 5.03292 32.2074 5 33 5C33.7926 5 34.5782 5.03292 35.3554 5.09756C36.697 5.20915 37.769 6.15393 38.1036 7.37992C38.8812 6.37323 40.2336 5.90772 41.517 6.31584C43.0296 6.79688 44.4863 7.4024 45.8747 8.12012C47.0704 8.7382 47.6964 10.0221 47.5331 11.2824C48.6374 10.6515 50.0642 10.7397 51.0922 11.6074C52.2935 12.6213 53.4081 13.7343 54.4234 14.9338C55.2924 15.9603 55.3807 17.3851 54.7489 18.4878C56.011 18.3248 57.2968 18.9498 57.9158 20.1438C58.6345 21.5303 59.2409 22.9848 59.7226 24.4953C60.1313 25.7768 59.6651 27.1273 58.657 27.9037C59.8848 28.2378 60.8309 29.3083 60.9427 30.648C60.9648 30.9128 60.9831 31.1785 60.9978 31.4452Z"
            fill="#D4AB7B" />
        </svg>
        Empanadas
      </a>
      <div class="d-flex align-middle">
        <RouterLink to="/" class="h1__nav px-2">Menú</RouterLink>
        <RouterLink to="/about" class="h1__nav px-2">Eventos</RouterLink>
        <div class="ps-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M9.04856 2.28571C9.04856 1.02333 10.086 0 11.3657 0H20.6343C21.914 0 22.9514 1.02333 22.9514 2.28571V6.85714H28.8449C29.4441 6.85714 29.9444 7.30786 29.9987 7.89652L31.9903 29.5074C32.1137 30.8459 31.0453 32 29.6827 32H2.31731C0.954729 32 -0.113685 30.8459 0.00971026 29.5074L2.00129 7.89652C2.0556 7.30786 2.5559 6.85714 3.15513 6.85714H9.04856V2.28571ZM20.6343 6.85714V3.42857C20.6343 2.7974 20.1156 2.28571 19.4757 2.28571H12.5243C11.8844 2.28571 11.3657 2.7974 11.3657 3.42857V6.85714H20.6343Z"
              fill="#16192C" />
          </svg>
        </div>
      </div>
    </div>
  </nav>
  <main class="main__desk">
    <button class="btn__desk me-2">
      <p class="p p--white">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk-ok me-2">
      <p class="p p--white">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk-no me-2">
      <p class="p p--white">ejemplo</p>
    </button>

    <!-- Arreglar alineación del texto -->
    <button class="btn__desk btn__desk--outline me-2">
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--outline-ok me-2">
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--outline-no me-2">
      <p class="p">ejemplo</p>
    </button>

    <!-- Botones con icon -->
    <button class="btn__desk--edit me-2">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd"
          d="M22.4142 1.41421C21.6332 0.633165 20.3668 0.633166 19.5858 1.41421L18.6422 2.3578L22.6422 6.3578L23.5858 5.41421C24.3668 4.63316 24.3668 3.36684 23.5858 2.58579L22.4142 1.41421ZM17.8563 3.14374L21.8563 7.14374L6.13769 22.8624L2.13769 18.8624L17.8563 3.14374ZM5.35175 23.6483L1.35175 19.6483L0.708334 23.7198C0.655334 24.0552 0.944875 24.3448 1.28025 24.2918L5.35175 23.6483Z"
          fill="#F8F8F8" />
      </svg>
    </button>

    <button class="btn__desk btn__desk--icon-outline me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--icon-outline-no me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--icon me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <button class="btn__desk btn__desk--icon-ok me-2">
      <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
        <path
          d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
      </svg>
      <p class="p">ejemplo</p>
    </button>

    <div class="btn__pay m-2">
      <button class="btn__desk btn__desk--icon-ok">
        <svg class="icon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M4.4629 1.14286C4.4629 0.511666 4.97459 0 5.60576 0H10.1772C10.8084 0 11.32 0.511666 11.32 1.14286V3.42857H14.2268C14.5223 3.42857 14.7691 3.65393 14.7959 3.94826L15.7782 14.7537C15.839 15.423 15.3121 16 14.64 16H1.14294C0.470889 16 -0.0560715 15.423 0.00478926 14.7537L0.987072 3.94826C1.01386 3.65393 1.26061 3.42857 1.55616 3.42857H4.4629V1.14286ZM10.1772 3.42857V1.71429C10.1772 1.3987 9.92136 1.14286 9.60576 1.14286H6.17719C5.86158 1.14286 5.60576 1.3987 5.60576 1.71429V3.42857H10.1772Z"
            fill="#F8F8F8" />
        </svg>
        <p class="p">Pagar</p>
      </button>
      <p class="h3">8</p>
    </div>

    <!-- label -->
    <div class="label__price m-2">
      <button>$</button>
      <p class="h3">899999</p>
    </div>

    <!-- Review -->
    <div class="card__review">
      <img src="https://placehold.co/340x221" alt="...">
      <div class="card-body">
        <h5 class="h3">Card title</h5>
        <svg class="score" width="126" height="21" viewBox="0 0 126 21" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M117.93 2.1221C117.064 -0.707367 113.059 -0.707367 112.193 2.1221L111.366 4.82287C111.238 5.24319 110.85 5.53024 110.41 5.53024H107.492C104.63 5.53024 103.393 9.15726 105.66 10.9056L108.223 12.8824C108.552 13.1367 108.69 13.5687 108.568 13.9669L107.638 17.0044C106.783 19.8003 110.024 22.0436 112.339 20.2577L114.451 18.6291C114.811 18.3515 115.312 18.3515 115.672 18.6291L117.784 20.2577C120.099 22.0436 123.34 19.8003 122.485 17.0044L121.555 13.9669C121.433 13.5687 121.571 13.1367 121.9 12.8824L124.463 10.9056C126.73 9.15726 125.493 5.53024 122.631 5.53024H119.713C119.273 5.53024 118.885 5.24319 118.757 4.82287L117.93 2.1221ZM114.105 2.70737C114.394 1.76421 115.729 1.76421 116.018 2.70737L116.844 5.40813C117.23 6.66911 118.394 7.53024 119.713 7.53024H122.631C123.585 7.53024 123.997 8.73924 123.242 9.32203L120.679 11.2988C119.69 12.0618 119.277 13.3577 119.643 14.5521L120.572 17.5897C120.857 18.5216 119.777 19.2694 119.005 18.6741L116.894 17.0455C115.814 16.2127 114.309 16.2127 113.229 17.0455L111.118 18.6741C110.346 19.2694 109.266 18.5216 109.551 17.5897L110.48 14.5521C110.846 13.3577 110.433 12.0618 109.444 11.2988L106.882 9.32203C106.126 8.73924 106.538 7.53024 107.492 7.53024H110.41C111.729 7.53024 112.893 6.66911 113.279 5.40813L114.105 2.70737Z"
            fill="#DBB93F" />
          <path
            d="M7.66071 2.41473C8.23797 0.528422 10.9083 0.528422 11.4856 2.41473L12.3121 5.1155C12.5694 5.95615 13.3454 6.53024 14.2246 6.53024H17.1424C19.0507 6.53024 19.875 8.94825 18.364 10.1138L15.8013 12.0906C15.142 12.5993 14.8668 13.4632 15.1104 14.2595L16.04 17.2971C16.6104 19.161 14.4494 20.6565 12.906 19.4659L10.7947 17.8373C10.075 17.2821 9.07134 17.2821 8.35159 17.8373L6.2403 19.4659C4.6969 20.6565 2.53587 19.161 3.10628 17.2971L4.03587 14.2595C4.27955 13.4632 4.00435 12.5993 3.34499 12.0906L0.782345 10.1138C-0.728666 8.94825 0.095582 6.53024 2.00391 6.53024H4.92174C5.80088 6.53024 6.57693 5.95615 6.83419 5.1155L7.66071 2.41473Z"
            fill="#DBB93F" />
          <path
            d="M34.0328 2.41473C34.6101 0.528422 37.2804 0.528422 37.8577 2.41473L38.6842 5.1155C38.9415 5.95615 39.7175 6.53024 40.5967 6.53024H43.5145C45.4228 6.53024 46.2471 8.94825 44.7361 10.1138L42.1734 12.0906C41.5141 12.5993 41.2389 13.4632 41.4825 14.2595L42.4121 17.2971C42.9825 19.161 40.8215 20.6565 39.2781 19.4659L37.1668 17.8373C36.4471 17.2821 35.4434 17.2821 34.7237 17.8373L32.6124 19.4659C31.069 20.6565 28.908 19.161 29.4784 17.2971L30.408 14.2595C30.6516 13.4632 30.3764 12.5993 29.7171 12.0906L27.1544 10.1138C25.6434 8.94825 26.4677 6.53024 28.376 6.53024H31.2938C32.173 6.53024 32.949 5.95615 33.2063 5.1155L34.0328 2.41473Z"
            fill="#DBB93F" />
          <path
            d="M64.2298 2.41473C63.6525 0.528422 60.9822 0.528422 60.4049 2.41473L59.5784 5.1155C59.3211 5.95615 58.5451 6.53024 57.6659 6.53024H54.7481C52.8398 6.53024 52.0155 8.94825 53.5265 10.1138L56.0892 12.0906C56.7485 12.5993 57.0237 13.4632 56.7801 14.2595L55.8505 17.2971C55.2801 19.161 57.4411 20.6565 58.9845 19.4659L61.0958 17.8373C61.8155 17.2821 62.8192 17.2821 63.5389 17.8373L65.6502 19.4659C67.1936 20.6565 69.3546 19.161 68.7842 17.2971L67.8546 14.2595C67.6109 13.4632 67.8862 12.5993 68.5455 12.0906L71.1082 10.1138C72.6192 8.94825 71.7949 6.53024 69.8866 6.53024H66.9688C66.0896 6.53024 65.3136 5.95615 65.0563 5.1155L64.2298 2.41473Z"
            fill="#DBB93F" />
          <path
            d="M86.777 2.41473C87.3543 0.528422 90.0246 0.528422 90.6019 2.41473L91.4284 5.1155C91.6857 5.95615 92.4617 6.53024 93.3409 6.53024H96.2587C98.167 6.53024 98.9913 8.94825 97.4802 10.1138L94.9176 12.0906C94.2582 12.5993 93.983 13.4632 94.2267 14.2595L95.1563 17.2971C95.7267 19.161 93.5657 20.6565 92.0223 19.4659L89.911 17.8373C89.1913 17.2821 88.1876 17.2821 87.4679 17.8373L85.3566 19.4659C83.8132 20.6565 81.6522 19.161 82.2226 17.2971L83.1522 14.2595C83.3958 13.4632 83.1206 12.5993 82.4613 12.0906L79.8986 10.1138C78.3876 8.94825 79.2119 6.53024 81.1202 6.53024H84.038C84.9172 6.53024 85.6932 5.95615 85.9505 5.1155L86.777 2.41473Z"
            fill="#DBB93F" />
        </svg>
        <p class="p">Some quick example text to build on the card title and make up the bulk of the card's
          content.</p>
      </div>
    </div>

    <!-- Menú -->
    <div class="card__menu">
      <div class="row g-0">
        <div class="col-3">
          <img src="https://placehold.co/244x244" alt="...">
        </div>
        <div class="col-9">
          <div class="card-body">
            <h5 class="h3">Card title</h5>
            <h5 class="h2">$<span>12 000</span></h5>
            <p class="p">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a,
              mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
              elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad
              litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac
              scelerisque ante pulvinar. Donec ut rhoncus ex. </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Carrito -->
    <div class="card__cart">
      <div class="row g-0">
        <div class="col-3">
          <img src="https://placehold.co/244x244" alt="...">
        </div>
        <div class="col-9">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <h5 class="h2">Card title</h5>
              <h5 class="h2 h2--neutro2">$<span>12 000</span></h5>
            </div>
            <p class="p text-wrap">Forem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie,
              dictum est a,
              mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus... </p>
            <div class="hstack gap-3 pt-5">
              <div class="ps-0 p-2">
                <div class="contador">
                  <button class="btn__contador"><svg width="16" height="3" viewBox="0 0 16 3" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M0 1.10345C0 0.494031 0.370523 0 0.827586 0H15.1724C15.6295 0 16 0.494031 16 1.10345C16 1.71287 15.6295 2.2069 15.1724 2.2069H0.827586C0.370523 2.2069 0 1.71287 0 1.10345Z"
                        fill="#F8F8F8" />
                    </svg></button>
                  <p class="h3">8</p>
                  <button class="btn__contador--reflection" dir=""><svg width="16" height="16" viewBox="0 0 16 16"
                      fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477562 8.5891 0 8 0C7.4109 0 6.93333 0.477562 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z"
                        fill="#F8F8F8" />
                    </svg></button>
                </div>
              </div>
              <div class="p-2 ms-auto"><button class="btn__desk btn__desk--icon-outline me-2">
                  <svg class="icon" width="16" height="17" viewBox="0 0 16 17" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.85714 16.5C11.7021 16.5 13.1216 15.8936 13.4757 15.7009C13.5391 15.6664 13.5785 15.6033 13.5913 15.5322L15.5391 4.67994C15.5555 4.58851 15.4827 4.50583 15.39 4.51168C14.5402 4.56536 10.8681 4.78571 7.85714 4.78571C4.84616 4.78571 1.17412 4.56536 0.324296 4.51168C0.23159 4.50583 0.158743 4.58851 0.175153 4.67994L2.123 15.5322C2.13576 15.6033 2.17516 15.6664 2.23862 15.7009C2.59268 15.8936 4.01219 16.5 7.85714 16.5Z" />
                    <path
                      d="M7.28571 0.5H8.42857C8.74416 0.5 9 0.755837 9 1.07143V1.37217C10.9351 1.42222 12.6574 1.58793 13.8076 1.7256C14.7129 1.83396 15.4453 2.48727 15.6958 3.36399C15.7787 3.65403 15.5728 3.94593 15.2716 3.96299C13.9301 4.03896 10.543 4.21429 7.85714 4.21429C5.17133 4.21429 1.78419 4.03896 0.442682 3.96299C0.141511 3.94593 -0.0644185 3.65403 0.018452 3.36399C0.268943 2.48727 1.00136 1.83396 1.9067 1.7256C3.0569 1.58793 4.77917 1.41471 6.71429 1.36466V1.07143C6.71429 0.755837 6.97012 0.5 7.28571 0.5Z" />
                  </svg>
                  <p class="p">Eliminar</p>
                </button></div>
              <div class="pe-0 p-2"> <button class="btn__desk me-2">
                  <p class="p p--white">Seguir comprando</p>
                </button></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Factura -->
    <div class="card__bill">
      <table class="table">
        <thead>
          <tr>
            <th class="h3" scope="col">Concepto</th>
            <th class="h3" scope="col">Costo</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">
          <tr>
            <td class="h3">Item 1</td>
            <td class="h3">$ <span>200</span></td>
          </tr>
        <tfoot>
          <tr>
            <th class="h2">TOTAL</th>
            <th class="h2">$ <span>350</span></th>
          </tr>
        </tfoot>

        </tbody>
      </table>
    </div>

    <!-- input -->
    <div class="mb-3">
      <input type="email" class="input__desk" id="exampleInputEmail1" placeholder="Ejemplo o instrucciones"
        aria-describedby="emailHelp">
    </div>

    <!-- Select -->
    <select  aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <!-- Contador -->
    <div class="contador">
      <button class="btn__contador"><svg width="16" height="3" viewBox="0 0 16 3" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M0 1.10345C0 0.494031 0.370523 0 0.827586 0H15.1724C15.6295 0 16 0.494031 16 1.10345C16 1.71287 15.6295 2.2069 15.1724 2.2069H0.827586C0.370523 2.2069 0 1.71287 0 1.10345Z"
            fill="#F8F8F8" />
        </svg></button>
      <p class="h3">8</p>
      <button class="btn__contador--reflection" dir=""><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6.93333 14.9333C6.93333 15.5224 7.4109 16 8 16C8.5891 16 9.06667 15.5224 9.06667 14.9333V9.06667H14.9333C15.5224 9.06667 16 8.5891 16 8C16 7.4109 15.5224 6.93333 14.9333 6.93333H9.06667V1.06667C9.06667 0.477562 8.5891 0 8 0C7.4109 0 6.93333 0.477562 6.93333 1.06667V6.93333H1.06667C0.477563 6.93333 0 7.4109 0 8C0 8.5891 0.477563 9.06667 1.06667 9.06667H6.93333V14.9333Z"
            fill="#F8F8F8" />
        </svg></button>
    </div>

    <!-- Paquetes -->
    <div class="card__package">
      <div class="card-content">
        <span>1</span>
        <h5 class="h3">Paquete mediano</h5>
        <h6 class="p text-body-secondary">CLibero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos. </h6>
        <ul>
          <li class="p">Sorem ipsum dolor sit amet, consectetur </li>
          <li class="p">Nunc vulputate libero et velit</li>
          <li class="p">Aac aliquet odio mattis adipiscing elit </li>
          <li class="p">Class aptent taciti sociosqu ad torquent</li>
        </ul>
        <a href="#">Card link</a>

      </div>
    </div>

    <!-- Carousel -->
    <div id="carouselExampleIndicators" class="carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" class="active" data-bs-slide-to="0"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
          aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
          aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://placehold.co/1152x600" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://placehold.co/1152x600" class="d-block w-100" alt="...">
        </div>
        <div class="carousel-item">
          <img src="https://placehold.co/1152x600" class="d-block w-100" alt="...">
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>




  </main>

  <RouterView />
</template>

<style>
:root {
  --primario: #E96345;
  --secundario: #D4AB7B;
  --Ok: #84AC99;
  --No: #E31A1A;
  --neutro-1: #16192C;
  --neutro-2: #425466;
  --neutro-3: #F8F8F8;
}

/* Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');
/* ---- */

.bg-primario {
  background-color: var(--primario);
}

@media (min-width: 1024px) {
  .main__desk {
    min-height: 100vh;
    margin-left: 144px;
    margin-right: 144px;
    margin-top: 48px;
    background-color: var(--neutro-3);
  }
}

/* Texto */
.nb-brand {
  color: var(--neutro-3);
  font-family: 'Inter', sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
  line-height: normal;
}

.h1 {
  color: var(--neutro-1, #16192C);
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
}

.h1--medium {
  font-size: 26px;
  font-weight: 500;
}

.h1__nav {
  color: var(--neutro-3, #F8F8F8);
  font-family: 'Inter', sans-serif;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
  line-height: normal;
}

.h2 {
  color: var(--neutro-1, #16192C);
  font-family: 'Inter', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  text-decoration: none;
}

.h2--neutro2 {
  color: var(--neutro-2);
}

.h2--medium {
  font-weight: 500;
}

.h3 {
  color: var(--neutro-1, #16192C);
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  text-decoration: none;
}

.p {
  color: var(--neutro-2);
  font-family: 'Rubik', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.32px;
  text-decoration: none;
}

.p--white {
  color: var(--neutro-3);
}

/* Input */
.input__desk {
  border: 1px solid #425466;
  border-bottom: 3px solid #425466;
  border-radius: 6px;
  height: 40px;


}

/* Select */
select {
  border: 2px solid #425466;
  border-radius: 6px;
  height: 40px;
  background-color: var(--neutro-3);
}


/* Botones */
.btn__desk {
  padding: 7px 14px;
  border-radius: 6px;
  height: 40px;
  background-color: var(--secundario);
  color: var(--neutro-3);
  border: none;
  cursor: pointer;
  vertical-align: middle;
}

.btn__desk:hover {
  background-color: #d39b5a;
  border: #d39b5a;
}

.btn__desk-ok {
  background-color: var(--Ok);
}

.btn__desk-ok:hover {
  background-color: #4fad80;
}

.btn__desk-no {
  background-color: #dd3636;
}

.btn__desk-no:hover {
  background-color: var(--No);
}

.btn__desk--outline {
  border: 2px solid var(--secundario, #D4AB7B);
  background: transparent;
}

.btn__desk--outline:hover {
  border: 2px solid var(--secundario, #D4AB7B);
  background: var(--secundario);

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--outline-ok {
  border: 2px solid var(--Ok);
  background: transparent;
}

.btn__desk--outline-ok:hover {
  border: 2px solid var(--Ok);
  background: var(--Ok);

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--outline-no {
  border: 2px solid #dd3636;
  background: transparent;
}

.btn__desk--outline-no:hover {
  border: 2px solid #dd3636;
  background: #dd3636;

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon {
  border: 2px solid var(--secundario, #D4AB7B);
  background: var(--secundario);
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon:hover {
  border: 2px solid #d39b5a;
  background-color: #d39b5a;
}

.btn__desk--icon-ok {
  border: 2px solid var(--Ok);
  background: var(--Ok);
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon-ok:hover {
  border: 2px solid #4fad80;
  background-color: #4fad80;
}

.btn__desk--icon-outline {
  border: 2px solid var(--secundario, #D4AB7B);
  background: transparent;
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-2);
  }
}

.btn__desk--icon-outline:hover {
  border: 2px solid var(--secundario, #D4AB7B);
  background: var(--secundario);
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--icon-outline-no {
  border: 2px solid #dd3636;
  background: transparent;
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-2);
  }
}

.btn__desk--icon-outline-no:hover {
  border: 2px solid #dd3636;
  background: #dd3636;
  display: inline-flex;
  gap: 9px;

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .p {
    color: var(--neutro-3);
  }
}

.btn__desk--edit {
  padding: 7px;
  border-radius: 6px;
  height: 40px;
  background-color: var(--secundario);
  color: var(--neutro-3);
  border: none;
  cursor: pointer;
  vertical-align: middle;
}

.btn__desk--edit:hover {
  background-color: #d39b5a;
  border: #d39b5a;
}

/* CARDS */
.card__review {
  width: min-content;
  height: min-content;
  border: 0;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  img {
    width: 340px;
    height: 221px;
    margin: 16px 16px 16px 16px;
    border-radius: 9px;
  }

  .h3 {
    margin: 0;
    padding-bottom: 8px;
  }

  p {
    padding-top: 16px;
  }

  .card-body {
    padding: 16px 32px 16px 32px;
  }
}

.card__package {
  width: 465px;
  height: min-content;
  border: 0;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  .card-content {
    padding: 48px;
  }

  span {
    display: inline-block;
    height: 80px;
    width: 80px;
    background-color: #D4AB7B;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    color: var(--neutro-3);
    font-family: 'Inter', sans-serif;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    text-decoration: none;
    margin-bottom: 18px;
  }

  .h3 {
    margin: 0;
    padding-bottom: 16px;
  }

  h6 {
    margin: 0;
    padding-bottom: 48px;
  }

  ul {
    list-style-image: url('src/assets/img/check point.svg');
    list-style-position: inside;
    padding: 0;
    padding-bottom: 8px;

    li {
      margin: 0;
      margin-bottom: 24px;

    }
  }

  a {
    color: var(--neutro-1, #16192C);
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    text-decoration: underline;
    text-align: center;
  }
}

.card__bill {
  width: 100%;
  height: min-content;
  border: 16;
  border-radius: 16px;
  padding: 30px 95px 30px 95px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  .h3 {
    color: #425466;
  }
}

.card__menu {
  width: 100%;
  height: min-content;
  border: 0;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  img {
    width: 244px;
    height: 244px;
    margin: 16px 16px 16px 16px;
    border-radius: 9px;
  }

  .card-body {
    padding: 16px 32px 16px 32px;

    .h3 {
      margin: 0;
      padding: 40px 0px 8px 0px;
    }

    .h2 {
      margin: 0;
      padding-bottom: 16px;
    }

    p {
      padding: 0;
      margin: 0px;
    }
  }
}

.card__cart {
  width: 100%;
  height: min-content;
  border: 0;
  border-radius: 16px;
  background: var(--neutro-3, #F8F8F8);
  box-shadow: 1px 6px 16px 0px rgba(66, 84, 102, 0.30);

  img {
    width: 244px;
    height: 244px;
    margin: 16px 16px 16px 16px;
    border-radius: 9px;
  }

  .card-body {
    padding: 0px 48px 0px 32px;

    .h2 {
      margin: 0;
      padding: 52px 0px 16px 0px;
    }

    p {
      padding: 0;
      margin: 0px;
    }
  }
}

.contador {
  display: flex;
  gap: 4px;

  .btn__contador {
    border-radius: 6px 0px 0px 6px;
    width: 35.188px;
    height: 34.286px;
    background-color: var(--neutro-2);
    color: var(--neutro-3);
    border: none;
    cursor: pointer;
    margin-top: 2.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__contador:hover {
    background-color: var(--neutro-1);
    color: var(--neutro-3);

  }

  .h3 {
    width: 46px;
    height: 40px;
    border-radius: 6px;
    border: 3px solid var(--neutro-2, #425466);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__contador--reflection {
    border-radius: 0px 6px 6px 0px;
    width: 35.188px;
    height: 34.286px;
    background-color: var(--neutro-2);
    color: var(--neutro-3);
    border: none;
    cursor: pointer;
    margin-top: 2.5px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__contador--reflection:hover {
    background-color: var(--neutro-1);
    color: var(--neutro-3);
  }

}

.carousel {

  .carousel-indicators {
    position: absolute;
    bottom: -72px;

    button {
      width: 12px;
      height: 12px;
      margin: 8px;
      border-radius: 50%;
      border: solid 2px var(--secundario);
      background-color: var(--neutro-3);
    }

    button.active {
      background-color: var(--secundario);
    }
  }

  .carousel-inner img {
    border-radius: 18px;
  }
}

/* add padding in h3 */
.btn__pay {
  display: flex;

  button {
    border-radius: 6px 0px 0px 6px;
  }

  .icon {
    margin-top: 2px;
    fill: var(--neutro-3);
  }

  .h3 {
    width: auto;
    height: 40px;
    padding: 7px 14px;
    border-radius: 0px 6px 6px 0px;
    border: 3px solid var(--Ok);
    border-left: 0px;
    text-align: center;
    padding-top: 4px;
  }

}

.btn__pay:hover {
  button {
    border: 2px solid #4fad80;
    background-color: #4fad80;
  }

  .h3 {
    border: 3px solid #4fad80;
    border-left: 0px;
  }

}

.label__price {
  display: flex;

  button {
    padding: 7px 14px;
    border-radius: 6px 0px 0px 6px;
    height: 40px;
    background-color: var(--neutro-2);
    color: var(--neutro-3);
    border: none;
    cursor: pointer;
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .h3 {
    width: auto;
    height: 40px;
    padding: 7px 14px;
    border-radius: 0px 6px 6px 0px;
    border: 3px solid var(--neutro-2);
    border-left: 0px;
    text-align: center;
    padding-top: 4px;
  }
}
</style>
