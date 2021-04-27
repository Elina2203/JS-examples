<!DOCTYPE html>

<style>
    /** @format */
    
    .container {
      margin: auto;
      width: 500px;
      height: 500px;
      display: grid;
      grid-template: repeat(10, 1fr) / repeat(10, 1fr);
      grid-gap: 5px;
    }
    
    .container a {
      border: 1px solid black;
      text-align: center;
      font-size: 50px;
      text-decoration: none;
      color: rgb(56, 56, 56);
    }
    
</style>

<div class="container" id="app">
    <?php
    for ($i = 0; $i < 100; $i++) {
      echo "<a href='#' data-id='$i'></a>";
    }
    ?>
</div>

<script src="4_in_line.js"></script>