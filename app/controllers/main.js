var sanPhamService = new SanPhamService();

function getEle(id) {
    return document.getElementById(id);
}

var layDanhSachSP = function() {
    sanPhamService.layDSSP().then(function(result) {
        // Thanh cong
        // console.log(result.data);
        // renderTable
        renderTable(result.data);
    }).catch(function(error) {
        // That bai
        console.log(error);
    })
}

layDanhSachSP();

function renderTable(mangSP) {
    var content = '';
    mangSP.map(function(sp, index) {
        content += `
            <tr>
                <td>${index + 1}</td>
                <td>${sp.tenSP}</td>
                <td>${sp.gia}</td>
                <td>
                    <img style="width: 80px; height: 80px" src="${sp.hinhAnh}" />
                </td>
                <td>${sp.moTa}</td>
                <td>
                    <button class="btn btn-danger">Xoá</button>
                    <button class="btn btn-success">Xem</button>
                </td>
            </tr>
        `;
    })
    getEle('tblDanhSachSP').innerHTML = content;
}
