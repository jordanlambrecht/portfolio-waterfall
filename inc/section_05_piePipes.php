
  <section class="chapter chapter-mobile container-fluid piePipe-outerContainer" data-section-name="Detailed Breakdown" id="piepipes">
    <div class="container-fluid pieGraph-container h-100 w-100 d-flex flex-column justify-content-center position-absolute">
        <div class=" position-relative d-flex align-content-center justify-content-center" id="">
          <!-- STARTPiechart SVG	  -->
          <?php include_once('./partials/04_piechart.php'); ?>
          <!-- 		END     Piechart SVG	-->
          <!-- 		START   Labels SVG	 	-->
        <?php include_once('./partials/04_piechart-labels.php'); ?>
          <!-- 		END     Labels SVG	-->
        </div>
    </div>
    <div class="container h-100 piePipe-container d-flex flex-column justify-content-center">
      <div class="piePipe-wrapper " id="piePipe-first">
        <div class="piePipe-wrapper-droplet" id="piePipe-droplet01">
          <div class="piePipe-droplet-wrapper-inner">
            <img src="https://portfoliowaterfall.pbds.dev/assets/img/testsplash.svg" class="piePipe" alt="First Pipe"/>
          </div>
        </div>
        <img src="https://portfoliowaterfall.pbds.dev/assets/img/pieFirst.svg" class="piePipe" alt="First Pipe"/>
      </div>
      <div class="piePipe-wrapper" id="piePipe-second">
        <div class="piePipe-wrapper-droplet" id="piePipe-droplet02">
          <div class="piePipe-droplet-wrapper-inner">
            <img src="https://portfoliowaterfall.pbds.dev/assets/img/testsplash.svg" class="piePipe" alt="First Pipe"/>
          </div>
        </div>
        <img src="https://portfoliowaterfall.pbds.dev/assets/img/pieSecond.svg" class="piePipe" alt="Second Pipe"/>
      </div>
      <div class="piePipe-wrapper" id="piePipe-third">
        <div class="piePipe-wrapper-droplet" id="piePipe-droplet03">
          <div class="piePipe-droplet-wrapper-inner">
            <img src="https://portfoliowaterfall.pbds.dev/assets/img/testsplash.svg" class="piePipe" alt="First Pipe"/>
          </div>
        </div>
        <img src="https://portfoliowaterfall.pbds.dev/assets/img/pieThird.svg" class="piePipe" alt="Third Pipe"/>
      </div>
      <div class="piePipe-wrapper" id="piePipe-fourth">
        <div class="piePipe-wrapper-droplet" id="piePipe-droplet04">
          <div class="piePipe-droplet-wrapper-inner">
            <img src="https://portfoliowaterfall.pbds.dev/assets/img/testsplash.svg" class="piePipe" alt="First Pipe"/>
          </div>
        </div>
        <img src="https://portfoliowaterfall.pbds.dev/assets/img/pieFourth.svg" class="piePipe" alt="Fourth Pipe"/>
      </div>
      <div class="piePipe-wrapper piePipe-lastPipe d-flex justify" id="piePipe-lastPipe">
        <canvas id="hero-lightpass" class="piePipe" />
      </div>
      <div class="piePipe-wrapper piePipe-check" id="piePipe-check">
        <img src="https://portfoliowaterfall.pbds.dev/assets/img/PF_RetirementCheck_v01.svg" class="piePipe" alt="Retirement Check"/>
      </div>
    </div>
  </section>
