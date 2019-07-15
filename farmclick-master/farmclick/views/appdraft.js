
    <div class="container" style="width:100%;height:300px">
    <div id="myCarousel" class="carousel slide" data-ride="carousel" style="height: inherit">
        <!-- Indicators -->
        <ol class="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <!-- Wrapper for slides -->
        <div class="carousel-inner" style="height: inherit">
            <div class="item active">
                <img src="images/photo-1528147652097-f9d663db95e4.jpg" alt="Los Angeles" style="width:100%;">
            </div>

            <div class="item">
                <img src="images/photo-1468408908883-029a25e230c1.jpg" alt="Chicago" style="width:100%;">
            </div>

            <div class="item">
                <img src="images/photo-1487943155999-d5534d14a384.jpg" alt="New york" style="width:100%;">
            </div>
        </div>

        <!-- Left and right controls -->
        <a class="left carousel-control" href="#myCarousel" data-slide="prev">
            <span class="glyphicon glyphicon-chevron-left"></span>
            <span class="sr-only">Previous</span>
        </a>
        <a class="right carousel-control" href="#myCarousel" data-slide="next">
            <span class="glyphicon glyphicon-chevron-right"></span>
            <span class="sr-only">Next</span>
        </a>
    </div>
</div>
<!--sell or buy forms-->
<section>
    <div class="container">
        <div class="row">
            <div class="col-md-6">
                <div class="jumbotron">
                    <h2 style="text-align: center"><b>SELL YOU PRODUCE</b></h2>
                    <div>
                        <form action="/crops/sell" method="POST" style="padding-bottom: 10px;padding-top: 10px">
                            <span>
                                <select name="cropname" id="cropname" onchange='checkoption(this.value)'>
                                    <option value="tomato">TOMATO</option>
                                    <option value="paddy">PADDY</option>
                                    <option value="corn">CORN</option>
                                    <option value="wheat">WHEAT</option>
                                    <option value="carrot">CARROT</option>
                                    <option value="beetroot">BEETROOT</option>
                                    <option value="onion">ONION</option>
                                    <option value="others">OTHERS</option>
                                </select><br>
                                <input type="text" name="othercrop" id="others" placeholder="enter cropname" style="display:none">
                            </span>
                            <select name="units">
                                <option value="kg">KG</option>
                                <option value="quintal">Quintal</option>
                                <option value="Ton">Ton</option>
                            </select><br />
                            <input type="text" name="numofunits" placeholder="number of units"><br />
                            <select name="status">
                                <option value="notready">Not ready to sell</option>
                                <option value="ready">Ready to sell</option>
                            </select><br>
                            <button>Submit</button>
                        </form>
                    </div>


                </div>
            </div>
            <div class="col-md-6">
                <div class="jumbotron">
                    <h2 style="text-align: center"><b>BUY PRODUCE</b></h2>
                    <div>
                        <form action="/crops/buy" method="POST" style="padding-bottom: 10px;padding-top: 10px">
                            <span>
                                <select name="cropname" id="cropname" onchange='option(this.value)'>
                                    <option value="tomato">TOMATO</option>
                                    <option value="paddy">PADDY</option>
                                    <option value="corn">CORN</option>
                                    <option value="wheat">WHEAT</option>
                                    <option value="carrot">CARROT</option>
                                    <option value="beetroot">BEETROOT</option>
                                    <option value="onion">ONION</option>
                                    <option value="others">OTHERS</option>
                                </select><br>
                                <input type="text" name="others" id="buyothers" placeholder="enter cropname" style="display:none">
                            </span>
                            <button>Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>






    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
<% include ./partials/footer %>


