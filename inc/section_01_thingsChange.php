
<section class="container-fluid d-flex flex-row vh-100 px-0">
  <div class="showslides--left w-50 h-100 p-2 py-md-5 px-md-4">
    <div class="container ">
      <div class="row">
        <div class="col-12">
          <h1 class="display-2">Things Change Over Time.</h1>
        </div>
        <div class="row py-5 my-2">
          <div class="col-12">
            <ul class="showslides ">
              <li id="technology" class="selected d-flex flex-row justify-content-start align-items-center py-2 mb-2">
                  <?php echo file_get_contents("./assets/img/PW_Technology_v01.svg"); ?>
                  <h3 class="text-left ">Technology</h3>
              </li>
              <li id="interestrates" class=" d-flex flex-row justify-content-start align-items-center py-2 mb-2">
                <?php echo file_get_contents("./assets/img/PW_InterestRates_v01.svg"); ?>
                <h3 class="text-left ">Interest Rates</h3>
              </li>
              <li id="stockmarket" class=" d-flex flex-row justify-content-start align-items-center py-2 mb-2">
                <?php echo file_get_contents("./assets/img/PW_StockMarket_v01.svg"); ?>
                <h3 class="text-left ">Stock Market</h3>
              </li>
              <li id="govtspending" class=" d-flex flex-row justify-content-start align-items-center py-2 mb-2">
                <?php echo file_get_contents("./assets/img/PW_GovtSpending_v01.svg"); ?>
                <h3 class="text-left ">Government Spending</h3>
              </li>
            </ul>

          </div>

        </div>
      </div>


    </div>
  </div>
  <div class="showslides--right d-flex w-50">
    <article id="technology-box" class="h-100 box showBox">
      <?php include './inc/showSlides_technology.php'; ?>
    </article>
<!--    Interest Rates  -->
    <article id="interestrates-box" class="h-100 box">
      <?php echo file_get_contents("./inc/showSlides_interestRates.php"); ?>
    </article>
<!--   stock market   -->
    <article id="stockmarket-box" class="h-100 box">
      <div class="container">
        <?php echo file_get_contents("./inc/showSlides_stockMarket.php"); ?>
      </div>
    </article>
    <article id="govtspending-box" class="h-100 box">

        <?php include("./inc/showSlides_govtSpending.php"); ?>

    </article>
  </div>
</section>
