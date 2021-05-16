// import Modal from "react-bootstrap/Modal";
import React from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function ModalProject(props) {
  const handleClose = () => {
    props.onHide();
  };
  return (
    <>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className="modal__item"
        open={props.show}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.show}>
          <div className="modal__paper">
            <Grid container spacing={3}>
              <Grid item xs={3}>
                <label>Nhập tên dự án</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <label>Loại hình đầu tư</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <label>Địa chỉ</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <label>Diện tích</label>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="standard-number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  //   fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <label>Tổng mức đầu tư</label>
              </Grid>
              <Grid item xs={9}>
                <TextField
                  id="standard-number"
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  //   fullWidth
                />
              </Grid>
              <Grid item xs={3}>
                <label>Danh mục đầu tư</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <label>Ngày bắt đầu</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <label>Ngày hoàn thành</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
              <Grid item xs={3}>
                <label>Thông tin ảnh</label>
              </Grid>
              <Grid item xs={9}>
                <TextField id="standard-basic" fullWidth />
              </Grid>
            </Grid>
          </div>
        </Fade>
      </Modal>
      {/* <Modal {...props}>
        <div>
          <label>Nhập tên dự án</label>
          <input type="text" />
        </div>
        <div>
          <label>Loại hình đầu tư</label>
          <input type="text" />
        </div>
        <div>
          <label>Địa chỉ</label>
          <input type="text" />
        </div>
        <div>
          <label>Diện tích</label>
          <input type="text" />
        </div>
        <div>
          <label>Tổng mức đầu tư</label>
          <input type="text" />
        </div>
        <div>
          <label>Danh mục đầu tư</label>
          <input type="text" />
        </div>
        <div>
          <label>Ngày bắt đầu</label>
          <input type="number" />
        </div>
        <div>
          <label>Ngày hoàn thành</label>
          <input type="number" />
        </div>
        <div>
          <label>Thông tin hình ảnh</label>
          <input type="file" />
        </div>
        <div>
          <label>Chọn ảnh cover</label>
          <input type="file" />
        </div>
        <div>
          <label>Miêu tả</label>
          <input type="file" />
        </div>
        <div>
          <label>Hình ảnh dự án</label>
          <input type="file" />
        </div>
        <div>
          <label>Hình ảnh Hero</label>
          <input type="file" />
        </div>
      </Modal> */}
    </>
  );
}
