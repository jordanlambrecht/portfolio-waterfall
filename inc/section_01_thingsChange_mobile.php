
<section class="container-fluid w-100 vh-100 px-0 thingsChange-mobile" id="thingschangemobile">
  <div class="showslides--mobile bg--black w-100 h-100 p-2 carousel-cell">
    <div class="container h-100 d-flex flex-column justify-content-around">
      <div class="row">
        <div class="col-12">
          <h1 class="display-2 text-center" id="thingsChangeHeader--mobile">Things Change Over Time.</h1>
        </div>
      </div>
      <div class="row ">
        <div class="col-12 ">
          <ul class="showslides-mobile ps-5">
            <li id="technology" class="selected d-flex flex-row justify-content-center align-items-center py-2 mb-2">
                <?php echo file_get_contents("./assets/img/PW_Technology_v01.svg"); ?>
                <h3 class="text-left ">Technology</h3>
            </li>
            <li id="interestrates" class=" d-flex flex-row justify-content-center align-items-center py-2 mb-2">
              <?php echo file_get_contents("./assets/img/PW_InterestRates_v01.svg"); ?>
              <h3 class="text-left ">Interest Rates</h3>
            </li>
            <li id="stockmarket" class=" d-flex flex-row justify-content-center align-items-center py-2 mb-2">
              <?php echo file_get_contents("./assets/img/PW_StockMarket_v01.svg"); ?>
              <h3 class="text-left ">Stock Market</h3>
            </li>
            <li id="govtspending" class=" d-flex flex-row justify-content-center align-items-center py-2 mb-2">
              <?php echo file_get_contents("./assets/img/PW_GovtSpending_v01.svg"); ?>
              <h3 class="text-left ">Government Spending</h3>
            </li>
          </ul>

        </div>

        </div>
      </div>


    </div>
  <div class="showslides--mobile bg--light-yellow w-100 h-100 p-2 carousel-cell">
      <?php include('./inc/showSlides_technology.php');  ?>
  </div>
  <div class="showslides--mobile bg--dark-green w-100 h-100 p-2 carousel-cell">
    <?php include("./inc/showSlides_interestRates.php"); ?>
  </div>
  <div class="showslides--mobile bg--light-green w-100 h-100 p-2 carousel-cell">
    <?php include("./inc/showSlides_stockMarket.php"); ?>
  </div>
  <div class="showslides--mobile bg--light-blue w-100 h-100 p-2 carousel-cell">
    <?php include("./inc/showSlides_govtSpending.php"); ?>
  </div>
</section>
