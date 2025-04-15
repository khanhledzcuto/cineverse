// Dữ liệu phim/sách (trong thực tế sẽ lấy từ API hoặc cơ sở dữ liệu)
let detailPlayer = null;
const userDatabase = [];
let isLoggedIn = false;
const mediaDatabase = [
  {
    id: 1,
    title: "SkyForce",
    poster: "assets/trending/skyforce.png",
    year: "2025",
    genre: "Hành động, Tâm Lý, Chiếu rạp",
    duration: "2h 30m",
    creator: "Sandeep Kewlani",
    rating: 4.8,
    ratingCount: 240,
    country: "India", // Thêm thông tin quốc gia
    synopsis: "Bộ phim hé lộ một câu chuyện đầy kịch tính, lấy cảm hứng từ những sự kiện có thật trong một trong những cuộc không kích khốc liệt nhất giữa Ấn Độ và Pakistan. Một người hùng ngã xuống, một đồng đội quyết tâm tìm ra sự thật – bản anh hùng ca tôn vinh lòng dũng cảm, sự hy sinh và tinh thần kiên cường bất diệt.",
    youtubeId: "PKsVB1wPZ78",
    additionalInfo: [
      { title: "Diễn viên", content: "Arshad Warsi, Divya Dutta, Satish Kaushik" },
      { title: "Giải thưởng", content: "Đề cử phim hành động xuất sắc nhất tại Liên hoan phim quốc tế 2025" },
      { title: "Hậu trường", content: "Bộ phim được quay trong điều kiện khắc nghiệt tại nhiều địa điểm khác nhau ở Ấn Độ và Dubai trong 6 tháng." }
    ]
  },
  {
    id: 2,
    title: "Nghi Lễ Trục Quỷ",
    poster: "assets/trending/dominionofdarkness.png",
    year: "2025",
    genre: "Kinh dị",
    duration: "1h 36m",
    creator: "Bobby Prasetyo",
    rating: 4.5,
    ratingCount: 180,
    country: "Indonesia", // Thêm thông tin quốc gia
    synopsis: "Câu chuyện tiết lộ hành trình tâm linh sâu sắc của một linh mục trẻ tên là Thomas, người đã mất niềm tin sau một tai nạn gia đình đau thương. Khi được Rendra, một linh mục trừ tà kỳ cựu, mời trở thành học trò của mình, Thomas miễn cưỡng đồng ý. Tuy nhiên, niềm tin của anh được thắp lại khi họ đối mặt với một vụ ám quỷ liên quan đến một cô gái tên Kayla. Sự suy sụp của Kayla sau khi thực hiện một nghi lễ, cô bị biến đổi đến mức không thể nhận ra, những vết thương tự xuất hiện trên cơ thể cô, hay ánh mắt ma quái đầy đe dọa khi bị thế lực quỷ dữ thao túng. Quyết tâm cứu Kayla bằng mọi giá, Thomas đã phải trải qua một hành trình hết sức khó khăn để chống lại các thế lực đen tối.",
    youtubeId: "sMkUS1wqr8Q",
    additionalInfo: [
      { title: "Diễn viên", content: "Jerome Kurnia, Lukman Sardi, Astrid Tiar" },
      { title: "Thông tin hậu trường", content: "Phim được quay trong điều kiện ánh sáng tối, tăng thêm cảm giác kinh dị." }
    ]
  },
  {
    id: 3,
    title: "Sát Thủ Vô Cùng Cực Hài",
    poster: "assets/trending/hitman.png",
    year: "2025",
    genre: "Hài, Hành động",
    duration: "1h 47m",
    creator: "Choi Won-sub",
    rating: 4.3,
    ratingCount: 220,
    country: "Korea", // Thêm thông tin quốc gia
    synopsis: "Phim xoay quanh Jun (Kwon Sang Woo), cựu điệp viên hiện đang là hoạ sĩ truyện tranh - trở thành mục tiêu kép của cả Cơ quan Tình báo Quốc gia (NIS) và bọn khủng bố trên toàn cầu sau khi đăng tải webtoon (truyện tranh mạng) lấy cảm hứng từ chính quá khứ điệp viên của mình. Sở dĩ, hành động này của Jun không chỉ làm lộ bí mật quốc gia mà còn khiến bọn khủng bố tìm cách trả thù.",
    youtubeId: "nmsMIDYfCow",
    additionalInfo: [
      { title: "Diễn viên", content: "Kwon Sang-woo, Jung Joon-ho, Lee Yi-kyung" },
      { title: "Giải thưởng", content: "Phim được yêu thích nhất tại Hàn Quốc năm 2025." }
    ]
  },
  {
    id: 4,
    title: "Thời Kỳ Xanh",
    poster: "assets/trending/blue.png",
    year: "2021",
    genre: "Chính kịch, Học đường",
    duration: "12 tập (mỗi tập 24 phút)",
    creator: "Naoki Yamakawa (manga gốc)",
    rating: 4.7,
    ratingCount: 300,
    country: "Japan", // Thêm thông tin quốc gia
    synopsis: "Dựa trên bộ manga ăn khách cùng tên của tác giả Yamaguchi Tsubasa đã chiến thắng giải Manga Taisho năm 2020. Dưới vỏ bọc của một nam sinh xuất sắc, Yatora Yaguchi luôn cố gắng hết sức để làm hài lòng mọi người. Cậu chưa bao giờ cảm thấy mình thật sự đang sống cho đến khi cậu bắt đầu vẽ bức tranh về khung cảnh sáng sớm dưới màu xanh huyền ảo tại Shibuya. Lần đầu tiên trong cuộc đời tăm tối của mình, Yatora nhận ra được nhịp đập trái tim mạnh mẽ dành cho hội họa và nghệ thuật: Tôi không phải thiên tài, nhưng tôi sẽ phấn đấu cho đến khi trở thành thiên tài!",
    youtubeId: "6Ya9YYPPHIo",
    additionalInfo: [
      { title: "Giải thưởng", content: "Đề cử Anime xuất sắc nhất năm 2021." },
      { title: "Nguồn cảm hứng", content: "Dựa trên manga cùng tên của tác giả Tsubasa Yamaguchi." }
    ]
  },
  {
    id: 5,
    title: "Môn Tiền Bảo Địa",
    poster: "assets/trending/100yards.png",
    year: "2024",
    genre: "Chính kịch, Hành động, Chiếu rạp",
    duration: "1h 48m",
    creator: "Xu Haofeng",
    rating: 4.7,
    ratingCount: 300,
    country: "China", // Thêm thông tin quốc gia
    synopsis: "Môn tiền bảo địa - 100 Yards (2024) Bối cảnh phim diễn ra tại Thiên Tân, Trung Quốc vào những năm 1920. Sau khi một võ sư nổi tiếng qua đời, hai học trò của ông trở thành đối thủ không đội trời chung để tranh giành quyền thừa kế võ đường. Một bên là Tề, đại đệ tử và người thừa kế được kỳ vọng, trong khi bên kia là Thẩm, con trai của sư phụ, người lẽ ra không theo nghiệp võ nhưng lại có đam mê mãnh liệt với nó. Cuộc tranh chấp được quyết định bằng võ đấu, nhưng kết quả chỉ làm tăng thêm mâu thuẫn. Khi những thách thức giữa họ ngày càng nhiều, các quy tắc truyền thống dần bị phá vỡ, gây chấn động cộng đồng võ thuật.",
    youtubeId: "zX7eQxIVxLI",
    additionalInfo: []
  },
  {
    id: 6,
    title: "All of Us Are Dead",
    poster: "assets/phimnuocngoai/ngoitruongxacsong.jpeg",
    year: "2022",
    genre: "Kinh dị, Sinh tồn, Học đường, Zombie",
    duration: "50-70 phút/tập",
    creator: "Lee Jae-kyoo, Kim Nam-su",
    rating: 4.6,
    ratingCount: 300,
    country: "Korea",
    synopsis: "Khi một virus zombie bùng phát trong trường học, nhóm học sinh phải đối mặt với cái chết và tìm cách sinh tồn trong môi trường đầy nguy hiểm. Phim khắc họa các mối quan hệ giữa nhân vật và các vấn đề xã hội.",
    youtubeId: "IN5TD4VRcSM",
    additionalInfo: [
      { title: "Ngày phát hành", content: "28 tháng 1, 2022" },
      { title: "Hãng sản xuất", content: "Studio Dragon, JTBC Studios" }
    ]
  },
  {
    id: 7,
    title: "Loki",
    poster: "assets/phimnuocngoai/loki.jpeg",
    year: "2021",
    genre: "Hành động, Phiêu lưu, Khoa học viễn tưởng, Siêu anh hùng",
    duration: "40-50 phút/tập",
    creator: "Kate Herron (Mùa 1)",
    rating: 4.8,
    ratingCount: 400,
    country: "USA",
    synopsis: "Loki từ một dòng thời gian khác bị TVA bắt giữ vì vi phạm dòng thời gian. Anh làm việc với Mobius để truy lùng các biến thể của chính mình và khám phá bí ẩn đa vũ trụ.",
    youtubeId: "nW948Va-l10",
    additionalInfo: [
      { title: "Ngày phát hành", content: "9 tháng 6, 2021" },
      { title: "Hãng sản xuất", content: "Marvel Studios" }
    ]
  },
  {
    id: 8,
    title: "Cruella",
    poster: "assets/phimnuocngoai/Crullea.jpeg",
    year: "2021",
    genre: "Hài đen, Tâm lý, Thời trang",
    duration: "134 phút",
    creator: "Craig Gillespie",
    rating: 4.5,
    ratingCount: 250,
    country: "USA",
    synopsis: "Quá trình hình thành và sự chuyển mình của Estella từ một người bình thường trở thành Cruella de Vil – nhân vật phản diện nổi tiếng trong 101 Dalmatians, với bối cảnh London những năm 1970.",
    youtubeId: "gmRKv7n2If8",
    additionalInfo: [
      { title: "Ngày phát hành", content: "28 tháng 5, 2021" },
      { title: "Hãng sản xuất", content: "Walt Disney Pictures" }
    ]
  },
  {
    id: 9,
    title: "Avengers: Endgame",
    poster: "assets/phimnuocngoai/Avengers - Endgame.jpeg",
    year: "2019",
    genre: "Hành động, Phiêu lưu, Khoa học viễn tưởng, Siêu anh hùng",
    duration: "181 phút",
    creator: "Anthony và Joe Russo",
    rating: 4.9,
    ratingCount: 1000,
    country: "USA",
    synopsis: "Sau khi Thanos tiêu diệt một nửa sự sống trong vũ trụ, các Avengers còn lại du hành thời gian để thu thập các Viên Đá Vô Cực, đối mặt với Thanos và cứu lấy mọi sự sống.",
    youtubeId: "TcMBFSGVi1c",
    additionalInfo: [
      { title: "Ngày phát hành", content: "26 tháng 4, 2019" },
      { title: "Hãng sản xuất", content: "Marvel Studios" }
    ]
  },
  {
    id: 10,
    title: "Avatar",
    poster: "assets/phimnuocngoai/avatar.jpeg",
    year: "2009",
    genre: "Khoa học viễn tưởng, Phiêu lưu, Hành động",
    duration: "162 phút",
    creator: "James Cameron",
    rating: 4.7,
    ratingCount: 800,
    country: "USA",
    synopsis: "Jake Sully, cựu lính thủy quân lục chiến, điều khiển một 'Avatar' để thâm nhập vào tộc Na'vi trên hành tinh Pandora, nhưng dần thay đổi quan điểm và đứng về phía họ chống lại sự xâm lược của con người.",
    youtubeId: "5PSNL1qE6VY",
    additionalInfo: [
      { title: "Ngày phát hành", content: "18 tháng 12, 2009" },
      { title: "Hãng sản xuất", content: "Lightstorm Entertainment, 20th Century Fox" }
    ]
  },
  {
    id: 11,
    title: "Mai",
    poster: "assets/phimviet/mai.png",
    year: "2025",
    genre: "Tâm lý, Chính kịch",
    duration: "130 phút",
    creator: "Trấn Thành",
    rating: 4.5,
    ratingCount: 342,
    country: "Việt Nam",
    synopsis: "Phim kể về Mai (Phương Anh Đào), một cô gái quê bị tổn thương sâu sắc, lên thành phố làm nghề massage trị liệu. Tại đây, cô gặp Dương – một chàng trai nhà giàu đang tìm cảm hứng sáng tác. Câu chuyện tình yêu giữa họ mở ra hành trình chữa lành và tìm lại chính mình.",
    youtubeId: "aSla854DQiM",
    additionalInfo: []
  },
  {
    id: 12,
    title: "Lật Mặt 7: Một điều ước",
    poster: "assets/phimviet/latmat7.png",
    year: "2025",
    genre: "Tâm lý, Gia đình",
    duration: "120 phút",
    creator: "Lý Hải",
    rating: 4.8,
    ratingCount: 297,
    country: "Việt Nam",
    synopsis: "Phần thứ 7 trong loạt phim \"Lật Mặt\" tiếp tục khai thác đề tài gia đình. Phim theo chân bà Hai trong hành trình thăm từng người con, qua đó hé lộ những bí mật và mâu thuẫn gia đình, mang đến những cung bậc cảm xúc sâu lắng.",
    youtubeId: "8_VIDJQkxGo",
    additionalInfo: []
  },
  {
    id: 13,
    title: "Làm Giàu Với Ma",
    poster: "assets/phimviet/lamgiauvoima.png",
    year: "2025",
    genre: "Hài, Kinh dị, Gia đình",
    duration: "110 phút",
    creator: "Nhật Trung (Trung Lùn)",
    rating: 4.3,
    ratingCount: 421,
    country: "Việt Nam",
    synopsis: "Phim kể về một gia đình nghèo vô tình gặp phải hồn ma hài hước, từ đó dẫn đến những tình huống dở khóc dở cười. Sự kết hợp giữa yếu tố hài hước và kinh dị mang đến trải nghiệm giải trí độc đáo cho khán giả.",
    youtubeId: "po9g5akeOxs",
    additionalInfo: []
  },
  {
    id: 14,
    title: "Bộ tứ báo thủ",
    poster: "assets/phimviet/botubaothu.png",
    year: "2025",
    genre: "Hài, Lãng mạn",
    duration: "133 phút",
    creator: "Trấn Thành",
    rating: 4.7,
    ratingCount: 278,
    country: "Việt Nam",
    synopsis: "Phim xoay quanh một nhóm bạn thân và những tình huống dở khóc dở cười trong cuộc sống và tình yêu.",
    youtubeId: "YwJ2164RzS0",
    additionalInfo: [
      { title: "Doanh thu", content: "Cán mốc 100 tỷ đồng chỉ sau 3 ngày công chiếu." }
    ]
  },
  {
    id: 15,
    title: "Quỷ Cẩu",
    poster: "assets/phimviet/quycau.png",
    year: "2025",
    genre: "Kinh dị, Giật gân",
    duration: "100 phút",
    creator: "Lưu Thành Luân",
    rating: 4.9,
    ratingCount: 195,
    country: "Việt Nam",
    synopsis: "Lấy cảm hứng từ truyền thuyết \"Chó đội nón mê\", phim kể về những sự kiện kỳ bí xảy ra tại một ngôi làng khi một sinh vật huyền bí xuất hiện. Tác phẩm gây chú ý với đề tài mới lạ và thông điệp về việc bảo vệ động vật.",
    youtubeId: "7CcNazJUmoY",
    additionalInfo: []
  }
];
const watchedStates = {};

  
  // Các phần tử DOM
document.addEventListener("DOMContentLoaded", function() {
  // Lấy các phần tử DOM cho modal
  const modal = document.getElementById("mediaDetailModal");
  const detailButtons = document.querySelectorAll(".btn-watch");
  const closeModal = document.querySelector(".close-modal");
    
  // Các phần tử DOM cho tìm kiếm
  const searchForm = document.getElementById("searchForm");
  const searchInput = document.getElementById("searchInput");
  const searchResults = document.getElementById("searchResults");
  const searchContainer = document.querySelector(".search-container");

  const detailPage = document.getElementById("detailPage");
  const btnBack = document.querySelector(".btn-back");
  
  // Thêm sự kiện click cho các nút chi tiết
  detailButtons.forEach((button) => {
    button.addEventListener("click", function() {
      const mediaCard = this.closest(".media-card");
      const movieId = parseInt(mediaCard.dataset.movieId);
      openMediaDetail(movieId);
    });
  });
  const fakeComments = [
    { user: "JohnDoe", comment: "Phim này rất tuyệt vời!" },
    { user: "JaneSmith", comment: "Tôi thích diễn xuất của các diễn viên." },
    { user: "MovieFan123", comment: "Cảnh hành động mãn nhãn!" },
  ];
  const commentList = document.getElementById("commentList");
  fakeComments.forEach((item) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment-item");
    commentDiv.innerHTML = `<strong>${item.user}:</strong> ${item.comment}`;
    commentList.appendChild(commentDiv);
  });

    // Xử lý bình luận
    const submitComment = document.getElementById("submitComment");
    const commentInput = document.getElementById("commentInput");

    submitComment.addEventListener("click", () => {
      if (!isLoggedIn) {
        Swal.fire({
          title: 'Bạn cần đăng nhập để bình luận',
          icon: 'error',
          timer: 1500,
          showConfirmButton: true
        });
      } else {
        const commentText = commentInput.value.trim();
        if (commentText) {
          const currentMedia = getCurrentDetailMedia();
          if (!currentMedia) return;
    
          // Hiển thị ra giao diện
          const newComment = document.createElement("div");
          newComment.classList.add("comment-item");
          newComment.innerHTML = `<strong>Bạn:</strong> ${commentText}`;
          commentList.appendChild(newComment);
          commentInput.value = "";
    
          // Lưu vào localStorage
          let data = JSON.parse(localStorage.getItem("ratingsAndComments")) || {};
          const mediaId = currentMedia.id;
          if (!data[mediaId]) data[mediaId] = { rating: 0, comments: [] };
          data[mediaId].comments.push(commentText);
          localStorage.setItem("ratingsAndComments", JSON.stringify(data));
        } else {
          alert("Vui lòng nhập nội dung bình luận!");
        }
      }
    });
    
  
  // Đóng modal khi nhấn nút đóng
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.classList.remove("modal-open");
  });
  
  // Đóng modal khi nhấn ra ngoài
  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
  
  // Đóng modal khi nhấn phím Esc
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && modal.style.display === "block") {
      modal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });
  
  // Lắng nghe sự kiện submit của form tìm kiếm
  searchForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Ngăn form gửi đi
    performSearch();
  });
  
  // Hàm debounce để tránh tìm kiếm quá nhiều lần
  function debounce(func, delay) {
    let timeoutId;
    return function() {
      const context = this;
      const args = arguments;
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }
  
  // Lắng nghe sự kiện nhập trong input với debounce
  searchInput.addEventListener("input", debounce(function() {
    if (this.value.length >= 2) {
      performSearch();
    } else {
      searchResults.classList.remove("show");
    }
  }, 300)); // Đợi 300ms sau khi người dùng ngừng gõ
  
  // Đóng kết quả tìm kiếm khi nhấp ra ngoài
  document.addEventListener("click", function(e) {
    if (!searchContainer.contains(e.target)) {
      searchResults.classList.remove("show");
    }
  });
  
  // Hàm thực hiện tìm kiếm
  function performSearch() {
    const searchTerm = searchInput.value.trim().toLowerCase();
    
    if (searchTerm === "") {
      searchResults.classList.remove("show");
      return;
    }
    
    // Lọc các phim/sách phù hợp với từ khóa tìm kiếm
    const matchedItems = mediaDatabase.filter(item => {
      return (
        item.title.toLowerCase().includes(searchTerm) ||
        item.creator.toLowerCase().includes(searchTerm) ||
        item.genre.toLowerCase().includes(searchTerm)
      );
    });
    
    // Hiển thị kết quả
    displaySearchResults(matchedItems, searchTerm);
  }
  
  // Hiển thị kết quả tìm kiếm
  function displaySearchResults(items, searchTerm) {
    // Xóa các kết quả trước đó
    searchResults.innerHTML = "";
    
    // Giới hạn số lượng kết quả hiển thị để tránh quá nhiều
    const limitedItems = items.slice(0, 5);
    
    if (items.length === 0) {
      // Không có kết quả nào
      searchResults.innerHTML = `
        <div class="no-results">
          Không tìm thấy kết quả cho "${searchTerm}"
        </div>
      `;
    } else {
      // Thêm mỗi kết quả vào container
      limitedItems.forEach(item => {
        // Tạo kết quả với đánh dấu từ khóa tìm kiếm
        const title = highlightSearchTerm(item.title, searchTerm);
        
        const resultItem = document.createElement("div");
        resultItem.className = "search-result-item";
        resultItem.dataset.id = item.id;
        
        resultItem.innerHTML = `
          <div class="search-result-poster">
            <img src="${item.poster}" alt="${item.title}">
          </div>
          <div class="search-result-info">
            <h4 class="search-result-title">${title}</h4>
            <div class="search-result-meta">
              ${item.year} • ${item.genre} • ${item.creator}
            </div>
            <div class="search-result-rating">
              <i class="fa-solid fa-star" style="color: var(--secondary-color)"></i>
              ${item.rating}
            </div>
          </div>
        `;
        
        // Thêm sự kiện click
        resultItem.addEventListener("click", function() {
          openMediaDetail(parseInt(this.dataset.id));
          searchResults.classList.remove("show");
          searchInput.value = "";
        });
        
        searchResults.appendChild(resultItem);
      });
      
      // Hiển thị xem thêm nếu có nhiều kết quả
      if (items.length > 5) {
        const moreResults = document.createElement("div");
        moreResults.className = "search-result-more";
        moreResults.innerHTML = `
          <span>Xem tất cả ${items.length} kết quả cho "${searchTerm}"</span>
        `;
        
        moreResults.addEventListener("click", function() {
          // Điều hướng đến trang kết quả tìm kiếm đầy đủ hoặc hiển thị tất cả kết quả
          // Trong ví dụ này, chỉ đóng kết quả tìm kiếm
          searchResults.classList.remove("show");
        });
        
        searchResults.appendChild(moreResults);
      }
    }
    
    // Hiển thị kết quả
    searchResults.classList.add("show");
  }
  
  // Hàm đánh dấu từ khóa tìm kiếm trong kết quả
  function highlightSearchTerm(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
  
  // Hàm mở modal chi tiết phim/sách
  function openMediaDetail(id) {
    // Tìm phim/sách theo id
    const media = mediaDatabase.find(item => item.id === id);
    
    if (!media) return;
    
    // Cập nhật nội dung modal từ dữ liệu media
    document.getElementById("modal-poster").src = media.poster;
    document.getElementById("modal-poster").alt = media.title;
    document.getElementById("modal-title").textContent = media.title;
    document.getElementById("modal-year").textContent = media.year;
    document.getElementById("modal-genre").textContent = media.genre;
    document.getElementById("modal-duration").textContent = media.duration;
    document.getElementById("modal-creator").textContent = media.creator;
    document.getElementById("modal-rating").textContent = media.rating;
    document.getElementById("modal-rating-count").textContent = `(${media.ratingCount} đánh giá)`;
    document.getElementById("modal-synopsis").textContent = media.synopsis;
    
    // Hiển thị số sao dựa trên đánh giá
    updateStarRating(media.rating);
    // Kiểm tra trạng thái "Đã xem" cho phim này
    const watchedBtn = document.querySelector(".btn-watched");
    if (watchedStates[media.id]) {
      watchedBtn.classList.add("active"); // Thêm màu nền nếu đã xem
    } else {
      watchedBtn.classList.remove("active"); // Không có màu nền nếu chưa xem
    }
    const watchlistBtn = document.querySelector(".btn-watchlist");
    const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    
    if (watchlist.includes(media.title)) {
      watchlistBtn.classList.add("active");
    } else {
      watchlistBtn.classList.remove("active");
    }
    
    
    // Hiển thị modal
    modal.style.display = "block";
    document.body.classList.add("modal-open");
  }
  
  // Hàm cập nhật hiển thị sao dựa trên đánh giá
  function updateStarRating(rating) {
    const starsContainer = document.getElementById("modal-stars");
    starsContainer.innerHTML = "";
    
    // Tạo sao đầy và nửa sao dựa trên rating
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    
    // Thêm sao đầy
    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement("i");
      star.className = "fa-solid fa-star";
      starsContainer.appendChild(star);
    }
    
    // Thêm nửa sao nếu có
    if (hasHalfStar) {
      const halfStar = document.createElement("i");
      halfStar.className = "fa-solid fa-star-half-alt";
      starsContainer.appendChild(halfStar);
    }
    
    // Thêm sao trống cho đủ 5 sao
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      const emptyStar = document.createElement("i");
      emptyStar.className = "far fa-star";
      starsContainer.appendChild(emptyStar);
    }
  }
  
  // Thêm sự kiện cho các nút hành động trong modal chi tiết
  document.addEventListener("click", function(e) {
    const watchedBtn = e.target.closest(".btn-watched");
    if (watchedBtn) {
        const mediaTitle = document.getElementById("modal-title").textContent;
        const media = mediaDatabase.find(item => item.title === mediaTitle);
        
        if (!media) return;

        // Toggle active class
        const movieId = media.id; // Lấy ID của phim
        watchedBtn.classList.toggle("active");

        // Cập nhật trạng thái "Đã xem"
        if (watchedBtn.classList.contains("active")) {
            watchedStates[movieId] = true; // Đánh dấu là đã xem
            addToSaved(media, "watched");
        } else {
            watchedStates[movieId] = false; // Đánh dấu là chưa xem
            removeFromSaved(media, "watched");
        }
    }
    const watchlistBtn = e.target.closest(".btn-watchlist");
    if (watchlistBtn) {
      const mediaTitle = document.getElementById("modal-title").textContent;
      const media = mediaDatabase.find(item => item.title === mediaTitle);
    if (!media) return;

     // Toggle active class
      const movieId = media.id;
      watchlistBtn.classList.toggle("active");

    if (watchlistBtn.classList.contains("active")) {
      addToSaved(media, "watchlist");
    } else {
      removeFromSaved(media, "watchlist");
    }
    }

  });
  
  // Thêm animation cho modal khi hiển thị
  function animateModal() {
    const modalContent = document.querySelector(".modal-content");
    modalContent.style.animation = "none";
    setTimeout(() => {
      modalContent.style.animation = "modalFadeIn 0.3s ease";
    }, 10);
  }

  document.addEventListener("click", function(e) {
    if (e.target.classList.contains("btn-more-info") || e.target.parentElement.classList.contains("btn-more-info")) {
      // Lấy ID phim đang mở trong modal
      const modalTitle = document.getElementById("modal-title").textContent;
      const media = mediaDatabase.find(item => item.title === modalTitle);
      
      if (media) {
        // Đóng modal
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
        
        // Mở trang chi tiết
        openDetailPage(media.id);
      }
    }
  });
  
  // Sự kiện cho nút quay lại
  btnBack.addEventListener("click", function() {
    closeDetailPage();
  });
  
  // Thêm phím tắt ESC để đóng trang chi tiết
  document.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && detailPage.classList.contains("show")) {
      closeDetailPage();
    }
  });
  
  // Hàm mở trang chi tiết
  function openDetailPage(id) {
    // Tìm phim/sách theo id
    const media = mediaDatabase.find(item => item.id === id);
    
    if (!media) return;
    
    // Cập nhật nội dung trang chi tiết
    document.getElementById("detail-title").textContent = media.title;
    document.getElementById("detail-poster").src = media.poster;
    document.getElementById("detail-poster").alt = media.title;
    document.getElementById("detail-year").textContent = media.year;
    document.getElementById("detail-genre").textContent = media.genre;
    document.getElementById("detail-duration").textContent = media.duration;
    document.getElementById("detail-creator").textContent = media.creator;
    document.getElementById("detail-rating").textContent = media.rating;
    document.getElementById("detail-rating-count").textContent = `(${media.ratingCount} đánh giá)`;
    document.getElementById("detail-synopsis").textContent = media.synopsis;
    
    // Cập nhật số sao
    updateDetailStarRating(media.rating);
    
    // Thêm video YouTube
    if (media.youtubeId) {
      document.getElementById("detail-video").innerHTML = `
        <div class="video-wrapper">
          <div class="plyr__video-embed" id="player">
            <iframe
              src="https://www.youtube.com/embed/${media.youtubeId}?origin=${location.origin}&iv_load_policy=3&modestbranding=1&rel=0&showinfo=0&autoplay=0"
              allowfullscreen
              allow="autoplay; encrypted-media"
            ></iframe>
          </div>
        </div>
      `;
    
      // Gắn player
      detailPlayer = new Plyr('#player', {
        autoplay: false,
        controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen']
      });
    } else {
      document.getElementById("detail-video").innerHTML = `<div class="no-video">Video không khả dụng</div>`;
    }
    
    
    // Thêm thông tin bổ sung
    const additionalContainer = document.getElementById("detail-additional");
    additionalContainer.innerHTML = "";
    
    if (media.additionalInfo && media.additionalInfo.length > 0) {
      media.additionalInfo.forEach(info => {
        const infoElement = document.createElement("div");
        infoElement.className = "additional-item";
        infoElement.innerHTML = `
          <h4>${info.title}</h4>
          <p>${info.content}</p>
        `;
        additionalContainer.appendChild(infoElement);
      });
    } else {
      additionalContainer.innerHTML = "<p>Không có thông tin bổ sung.</p>";
    }
    createInteractiveStars();
    selectedRating = 0;
    feedbackText.textContent = "";

    // Hiển thị trang chi tiết
    detailPage.classList.add("show");
    document.body.style.overflow = "hidden"; // Ngăn cuộn trang
    
    // Cuộn lên đầu trang
    window.scrollTo(0, 0);
  }
  
  // Hàm đóng trang chi tiết
  function closeDetailPage() {
    detailPage.classList.remove("show");
    document.body.style.overflow = ""; // Khôi phục cuộn trang
    if (detailPlayer) {
      detailPlayer.pause();
    }    
  }
  
  // Hàm cập nhật hiển thị sao dựa trên đánh giá trong trang chi tiết
  function updateDetailStarRating(rating) {
    const starsContainer = document.getElementById("detail-stars");
    starsContainer.innerHTML = "";
    
    // Tạo sao đầy và nửa sao dựa trên rating
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    
    // Thêm sao đầy
    for (let i = 0; i < fullStars; i++) {
      const star = document.createElement("i");
      star.className = "fa-solid fa-star";
      starsContainer.appendChild(star);
    }
    
    // Thêm nửa sao nếu có
    if (hasHalfStar) {
      const halfStar = document.createElement("i");
      halfStar.className = "fa-solid fa-star-half-alt";
      starsContainer.appendChild(halfStar);
    }
    
    // Thêm sao trống cho đủ 5 sao
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      const emptyStar = document.createElement("i");
      emptyStar.className = "far fa-star";
      starsContainer.appendChild(emptyStar);
    }
  }
  // Thêm code này vào phần cuối của file script.js, bên trong DOMContentLoaded event
  const allMoviesPage = document.getElementById("allMoviesPage");
  const viewAllButtons = document.querySelectorAll(".view-all");
  const allMoviesBackButton = document.querySelector(".all-movies-back");
  const allMoviesGrid = document.getElementById("allMoviesGrid");
  const sortSelect = document.getElementById("sort-select");
  const genreSelect = document.getElementById("genre-select");

  // Xử lý nút "Xem tất cả"
  viewAllButtons.forEach(button => {
    button.addEventListener("click", function(e) {
      e.preventDefault();
    
      // Xác định loại phim nào được chọn dựa vào section
      const sectionTitle = this.closest(".section-header").querySelector("h2").textContent;
      document.querySelector(".all-movies-title").textContent = `Tất cả ${sectionTitle}`;
    
      // Lọc danh sách phim dựa theo section
      let filteredMovies = [];
      if (sectionTitle === "Xu hướng") {
        // Hiển thị tất cả phim
        filteredMovies = [...mediaDatabase];
      } else if (sectionTitle === "Phim Việt") {
        // Lọc phim Việt (đây là ví dụ, bạn cần thêm thuộc tính country vào database)
        filteredMovies = mediaDatabase.filter(movie => movie.country === "Vietnam");
      } else if (sectionTitle === "Phim Nước Ngoài") {
        // Lọc phim nước ngoài
      filteredMovies = mediaDatabase.filter(movie => movie.country !== "Vietnam");
    }
    
    renderAllMovies(filteredMovies);
    allMoviesPage.classList.add("show");
    document.body.style.overflow = "hidden";
    });
  });

  // Nút quay lại từ trang xem tất cả
  allMoviesBackButton.addEventListener("click", function() {
    allMoviesPage.classList.remove("show");
    document.body.style.overflow = "";
  });

  // Lọc và sắp xếp phim
  sortSelect.addEventListener("change", function() {
    applyFilters();
  });

  genreSelect.addEventListener("change", function() {
    applyFilters();
  });

  // Hàm áp dụng bộ lọc
  function applyFilters() {
    const sortBy = sortSelect.value;
    const genreFilter = genreSelect.value;
  
    let filteredMovies = [...mediaDatabase];
  
    // Lọc theo thể loại
    if (genreFilter !== "all") {
      filteredMovies = filteredMovies.filter(movie => 
      movie.genre.toLowerCase().includes(genreFilter.toLowerCase())
      );
    }
  
    // Sắp xếp
    switch(sortBy) {
      case "rating-desc":
        filteredMovies.sort((a, b) => b.rating - a.rating);
        break;
      case "rating-asc":
        filteredMovies.sort((a, b) => a.rating - b.rating);
        break;
      case "year-desc":
        filteredMovies.sort((a, b) => parseInt(b.year) - parseInt(a.year));
        break;
      case "year-asc":
        filteredMovies.sort((a, b) => parseInt(a.year) - parseInt(b.year));
        break;
      }
  
    renderAllMovies(filteredMovies);
  }

  // Hiển thị danh sách phim
  function renderAllMovies(movies) {
    allMoviesGrid.innerHTML = '';

    if (movies.length === 0) {
      allMoviesGrid.innerHTML = '<p class="no-results">Không tìm thấy phim phù hợp</p>';
      return;
    }

    movies.forEach(movie => {
      const movieCard = document.createElement('div');
      movieCard.className = 'media-card';
      movieCard.dataset.movieId = movie.id;

      movieCard.innerHTML = `
        <div class="media-poster">
          <img src="${movie.poster}" alt="${movie.title}">
          <div class="media-hover">
            <div class="rating">
              <i class="fa-solid fa-star"></i>
              <span>${movie.rating}</span>
            </div>
            <button class="btn-watch">Chi tiết</button>
          </div>
        </div>
        <div class="media-info">
          <h3 class="media-title">${movie.title}</h3>
          <p class="media-creator">${movie.creator}</p>
        </div>
      `;

      // Thêm event listener cho nút chi tiết trong mỗi card
      const detailButton = movieCard.querySelector('.btn-watch');
      detailButton.addEventListener('click', function() {
        openMediaDetail(movie.id);
      });
      


      allMoviesGrid.appendChild(movieCard);
    });
  }

    // Thực hiện lọc lần đầu khi trang tải
  function initializeGenreOptions() {
    // Tạo danh sách thể loại từ database
    const genres = new Set();

    mediaDatabase.forEach(movie => {
      const movieGenres = movie.genre.split(', ');
      movieGenres.forEach(genre => genres.add(genre));
    });

    // Cập nhật tùy chọn thể loại
    genreSelect.innerHTML = '<option value="all">Tất cả</option>';

    genres.forEach(genre => {
      const option = document.createElement('option');
      option.value = genre.toLowerCase();
      option.textContent = genre;
      genreSelect.appendChild(option);
    });
    }

  // Khởi tạo tùy chọn thể loại
  initializeGenreOptions();
  // Xử lý active cho navigation
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    link.addEventListener("click", function () {
      navLinks.forEach(l => l.classList.remove("active"));
      this.classList.add("active");
    });
  });
  const loginBtn = document.querySelector(".btn-login");
  const loginModal = document.getElementById("loginModal");
  const closeLoginModal = loginModal.querySelector(".close-modal");
  const loginForm = document.getElementById("loginForm");
  const usernameInput = document.getElementById("username");
  const heroLoginBtn = document.getElementById("heroLoginBtn");
  

  function checkLoginStatus() {
    const user = localStorage.getItem("user");
    const heroGreeting = document.getElementById("heroGreeting");
    const heroUsername = document.getElementById("heroUsername");

    if (user) {
      isLoggedIn = true;
      Swal.fire({
        title: 'Đăng nhập thành công!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false
      });
      loginBtn.textContent = `Xin chào, ${user}`;
      loginBtn.classList.add("logged-in");

      if (heroLoginBtn) heroLoginBtn.style.display = "none";
      if (heroGreeting) {
        heroGreeting.style.display = "block";
        heroUsername.textContent = user;
      }
    } else {
      loginBtn.textContent = "Đăng nhập";
      loginBtn.classList.remove("logged-in");

      if (heroLoginBtn) heroLoginBtn.style.display = "inline-block";
      if (heroGreeting) heroGreeting.style.display = "none";
    }
  }
  checkLoginStatus();
  loginBtn.addEventListener("click", () => {
    const user = localStorage.getItem("user");
    if (user) {
      Swal.fire({
        title: 'Bạn muốn đăng xuất?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Đăng xuất',
        cancelButtonText: 'Hủy',
        confirmButtonColor: '#F97316'
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.clear(); // ✅ Xóa toàn bộ localStorage
          checkLoginStatus();
        
          Swal.fire({
            title: 'Đã đăng xuất!',
            icon: 'success',
            timer: 1500,
            showConfirmButton: false
          });
        
          // Reload lại trang cho sạch sẽ
          setTimeout(() => {
            location.reload();
          }, 1600);
        }
      });

    } else {
      loginModal.style.display = "block";
      document.body.classList.add("modal-open");
    }
  });
  closeLoginModal.addEventListener("click", () => {
    loginModal.style.display = "none";
    document.body.classList.remove("modal-open");
  });

  window.addEventListener("click", (e) => {
    if (e.target === loginModal) {
      loginModal.style.display = "none";
      document.body.classList.remove("modal-open");
    }
  });

  if (heroLoginBtn) {
    heroLoginBtn.addEventListener("click", () => {
      loginModal.style.display = "block";
      document.body.classList.add("modal-open");
    });
  }
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = usernameInput.value.trim();
    if (username) {
      localStorage.setItem("user", username);
      loginModal.style.display = "none";
      document.body.classList.remove("modal-open");
      checkLoginStatus();
    }
  });
  document.addEventListener("click", function(e) {
    const watchedBtn = e.target.closest(".btn-watched");
    if (watchedBtn) {
        const modalId = "mediaDetailModal"; // Hoặc lấy ID của modal hiện tại
        if (modalStates[modalId].watched) {
            // Xóa màu nền
            watchedBtn.classList.remove("active");
            
        } else {
            // Thêm màu nền
            watchedBtn.classList.add("active");
        }
        modalStates[modalId].watched = !modalStates[modalId].watched;

        // Thêm hoặc xóa tên phim vào danh sách đã xem
        const mediaTitle = document.getElementById("modal-title").textContent;
        const media = mediaDatabase.find(item => item.title === mediaTitle);

        if (modalStates[modalId].watched) {
            addToSaved(media, "watched");
        } else {
            removeFromSaved(media, "watched");
        }
    }
  });

  function addToSaved(media, type) {
    const listElement = document.getElementById(type === "watched" ? "watchedList" : "watchlist");
    const firstItem = listElement.querySelector("li");

    // Xóa thông báo "Chưa có mục nào" nếu có
    if (firstItem && firstItem.textContent === "Chưa có mục nào") {
        listElement.innerHTML = "";
    }

    // Kiểm tra xem phim đã có trong danh sách chưa
    const exists = [...listElement.querySelectorAll("li")].some(li => li.textContent === media.title);
    if (!exists) {
        const li = document.createElement("li");
        li.textContent = media.title;
        li.style.cursor = "pointer";
        
        // Thêm sự kiện mở lại modal chi tiết khi click
        li.addEventListener("click", () => {
          openMediaDetail(media.id);
        });
        
        listElement.appendChild(li);
      

        const typeText = type === "watched" ? "Đã xem" : "Muốn xem";
        Swal.fire({
          title: '🎉 Đã thêm!',
          text: `${media.title} đã được thêm vào danh sách "${typeText}".`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
        
        
        // Lưu vào localStorage
        let listKey = type === "watched" ? "watchedList" : "watchlist";
        let savedList = JSON.parse(localStorage.getItem(listKey)) || [];
        if (!savedList.includes(media.title)) {
          savedList.push(media.title);
          localStorage.setItem(listKey, JSON.stringify(savedList));
        }             
    }
  }

  function removeFromSaved(media, type) {
    const listElement = document.getElementById(type === "watched" ? "watchedList" : "watchlist");
    const items = listElement.querySelectorAll("li");

    items.forEach(item => {
        if (item.textContent === media.title) {
            item.remove();
            const typeText = type === "watched" ? "Đã xem" : "Muốn xem";
            Swal.fire({
              title: '🗑️ Đã xóa!',
              text: `${media.title} đã được gỡ khỏi danh sách "${typeText}".`,
              icon: 'error',
              timer: 1500,
              showConfirmButton: false
            });
        }
    });


    // Cập nhật localStorage
    let listKey = type === "watched" ? "watchedList" : "watchlist";
    let savedList = JSON.parse(localStorage.getItem(listKey)) || [];
    savedList = savedList.filter(title => title !== media.title);
    localStorage.setItem(listKey, JSON.stringify(savedList));
    

    // Nếu không còn mục nào, hiển thị lại thông báo
    if (listElement.children.length === 0) {
        const placeholder = document.createElement("li");
        placeholder.textContent = "Chưa có mục nào";
        listElement.appendChild(placeholder);
    }
  }
  // Hàm khởi tạo trạng thái cho các modal
  function initializeModalState() {
  const watchedList = JSON.parse(localStorage.getItem("watchedList")) || [];
  const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];

  function renderList(list, elementId) {
    const container = document.getElementById(elementId);
    container.innerHTML = "";

    if (list.length === 0) {
      const placeholder = document.createElement("li");
      placeholder.textContent = "Chưa có mục nào";
      container.appendChild(placeholder);
      return;
    }

    list.forEach(title => {
      const media = mediaDatabase.find(item => item.title === title);
      if (!media) return;

      const li = document.createElement("li");
      li.textContent = media.title;
      li.style.cursor = "pointer";
      li.addEventListener("click", () => {
        openMediaDetail(media.id);
      });

      container.appendChild(li);
    });
  }

  renderList(watchedList, "watchedList");
  renderList(watchlist, "watchlist");

  // Gắn class active cho nút trong card
  const mediaCards = document.querySelectorAll(".media-card");
  mediaCards.forEach(card => {
    const title = card.querySelector(".media-title").textContent;
    if (watchedList.includes(title)) {
      const btn = card.querySelector(".btn-watched");
      if (btn) btn.classList.add("active");
    }
    if (watchlist.includes(title)) {
      const btn = card.querySelector(".btn-watchlist");
      if (btn) btn.classList.add("active");
    }
  });
  } 
  // ⭐ Tạo hệ thống đánh giá sao cho trang chi tiết
const detailRatingStars = document.getElementById("detailRatingStars");
const feedbackText = document.getElementById("detailRatingFeedback");

// Mảng nội dung phản hồi theo số sao
const feedbacks = {
  1: "Tệ 😞",
  2: "Không hay lắm 😕",
  3: "Tạm ổn 😐",
  4: "Rất hay 😍",
  5: "Tuyệt vời xuất sắc! 🌟"
};

// Khởi tạo ngôi sao có thể click
function createInteractiveStars() {
  detailRatingStars.innerHTML = "";
  for (let i = 1; i <= 5; i++) {
    const star = document.createElement("i");
    star.className = "fa-regular fa-star";
    star.dataset.value = i;

    // Hover
    star.addEventListener("mouseover", () => highlightStars(i));
    star.addEventListener("mouseout", () => resetStars());
    
    // Click chọn
    star.addEventListener("click", () => {
      setRating(i);
    });

    detailRatingStars.appendChild(star);
  }
}

let selectedRating = 0;

function highlightStars(count) {
  [...detailRatingStars.children].forEach((star, idx) => {
    star.className = idx < count ? "fa-solid fa-star" : "fa-regular fa-star";
  });
  feedbackText.textContent = feedbacks[count];
}

function resetStars() {
  [...detailRatingStars.children].forEach((star, idx) => {
    star.className = idx < selectedRating ? "fa-solid fa-star" : "fa-regular fa-star";
  });
  feedbackText.textContent = selectedRating > 0 ? feedbacks[selectedRating] : "";
}

function setRating(value) {
  selectedRating = value;
  feedbackText.textContent = feedbacks[value];

  const currentMedia = getCurrentDetailMedia();
  if (!currentMedia) return;

  // Lấy dữ liệu hiện tại từ localStorage
  let data = JSON.parse(localStorage.getItem("ratingsAndComments")) || {};
  const mediaId = currentMedia.id;

  // Ghi lại đánh giá sao
  if (!data[mediaId]) data[mediaId] = { rating: 0, comments: [] };
  data[mediaId].rating = value;

  // Lưu lại
  localStorage.setItem("ratingsAndComments", JSON.stringify(data));

  Swal.fire({
    title: `🎉 Cảm ơn bạn đã đánh giá ${value} sao!`,
    text: feedbacks[value],
    icon: "success",
    timer: 1500,
    showConfirmButton: false
  });
  }
function getCurrentDetailMedia() {
  const currentTitle = document.getElementById("detail-title").textContent;
  return mediaDatabase.find(item => item.title === currentTitle);
  }



  initializeModalState();
  
});

  