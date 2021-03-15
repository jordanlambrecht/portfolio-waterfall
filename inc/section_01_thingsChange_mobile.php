
<section class="chapter chapter-mobile container-fluid w-100 vh-100 px-0 thingsChange-mobile" id="thingschangemobile" data-section-name="Things Change">
  <div class="showslides--mobile bg--black w-100 h-100 px-2 py-1 pt-5 carousel-cell">
    <div class="container h-100 ">
      <div class="row h-100 d-flex flex-column justify-content-center">
        <div class="col-12 mb-3 flex-fill">
          <h1 class="display-3 display-slideShow text-center" id="thingsChangeHeader--mobile">Things Change Over Time.</h1>
        </div>
        <div class="col-12 ">
          <ul class="showslides-mobile d-flex flex-column align-items-center ps-sm-5">
            <li id="technology" class="selected d-flex flex-row justify-content-center align-items-center py-2 mb-2">
                <?php echo file_get_contents("./assets/img/PW_Technology_v01.svg"); ?>
                <h2 class="text-left color--light-yellow">Technology</h2>
            </li>
            <li id="interestrates" class=" d-flex flex-row justify-content-center align-items-center py-2 mb-2">
              <?php echo file_get_contents("./assets/img/PW_InterestRates_v01.svg"); ?>
              <h2 class="text-left color--dark-green">Interest Rates</h2>
            </li>
            <li id="stockmarket" class=" d-flex flex-row justify-content-center align-items-center py-2 mb-2">
              <?php echo file_get_contents("./assets/img/PW_StockMarket_v01.svg"); ?>
              <h2 class="text-left color--light-green">Stock Market</h2>
            </li>
            <li id="govtspending" class=" d-flex flex-row justify-content-center align-items-center py-2 mb-2">
              <?php echo file_get_contents("./assets/img/PW_GovtSpending_v01.svg"); ?>
              <h2 class="text-left color--dark-blue">Government Spending</h2>
            </li>
          </ul>

        </div>
        <div class="col-12 flex-fill">
        </div>

        </div>
      </div>


    </div>
  <div class="showslides--mobile bg--light-yellow w-100 h-100 p-2 carousel-cell">
      <?php include('./partials/01_thingsChange_slide_technology.php');  ?>
  </div>
  <div class="showslides--mobile bg--dark-green w-100 h-100 p-2 carousel-cell">
    <?php include("./partials/01_thingsChange_slide_interestRates.php"); ?>
  </div>
  <div class="showslides--mobile bg--light-green w-100 h-100 p-2 carousel-cell">
    <?php include("./partials/01_thingsChange_slide_stockMarket.php"); ?>
  </div>
  <div class="showslides--mobile bg--light-blue w-100 h-100 p-2 carousel-cell">
    <?php include("./partials/01_thingsChange_slide_govtSpending.php"); ?>
  </div>
</section>
