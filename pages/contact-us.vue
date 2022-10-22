<template>
  <div>
    <!-- Header -->
    <br><br><br><br>
    <header id="header" class="header relative">
      <div class="header-content relative">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-xl-12">
              <div class="text-container text-center">
                <h1>تماس با علی‌بیمه</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div class="cards-1 relative">
      <div class="container">
        <p class="contact-us__description">
          مشتری گرامی برای پیگیری یا سؤال درباره سفارش خود، از آدرس ایمیل زیر استفاده کنید. برای تسریع در پاسخ گویی شماره سفارش (پیگیری) را در
          ایمیل خود ذکر کنید.
        </p>
        <div class="row">
          <!-- end of col -->
        </div>
        <div class="container-fluid container-lg">
          <div class="content-card">
            <div class="contact-us__content d-flex text-right">
              <div class="contact-us__info">
                <a3 class="subtitle">آدرس:</a3>
                <p class="contact-us__address">تهران، فلکه دوم صادقیه، ساختمان گلدیس، طبقه ۱۱ واحد 1102</p>
                <a3 class="subtitle">کد پستی:</a3>
                <p class="contact-us__postal-code">1513737514</p>
                <a3 class="subtitle">تلفن تماس:</a3>
                <p><a href="tel:+982191319030">021-91319030</a></p>
                <a3 class="subtitle">پست الکترونیکی:</a3>
                <p class="contact-us__email">
                  <a class="" href="mailto:info@alibime.ir">info@alibime.ir</a>
                </p>
                <a3 class="subtitle">شبکه های اجتماعی:</a3>
              </div>
              <div class="contact-us__map">
                <iframe
                  class="contact-us__map-iframe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d481.50783069620917!2d51.33566258188115!3d35.72165198376043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8dfd43a477bc23%3A0x4342291108c88d62!2zMzXCsDQzJzE5LjEiTiA1McKwMjAnMDkuOCJF!5e0!3m2!1sen!2s!4v1606704286144!5m2!1sen!2s"
                  frameborder="0"
                  width="500"
                  height="450"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end of container -->
    </div>
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: `تماس با ما`,
    }
  },
  layout: 'main',
}
</script>

<style scoped>
.main___p {
  background: white !important;
}
.cls-1,
.cls-2 {
  fill: #215fa2;
}
</style>
