import { SpecialZoomLevel, Viewer, Worker } from "@react-pdf-viewer/core";
// Import styles
import "@react-pdf-viewer/core/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import Modal from "react-bootstrap/Modal";

export default function ModalLookup(props) {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <PDF fileBook={props?.fileBook} />
    </Modal>
  );
}

function PDF({ fileBook }) {
  const renderToolbar = (Toolbar) => (
    <Toolbar>
      {(slots) => {
        const {
          CurrentPageInput,
          EnterFullScreen,
          GoToNextPage,
          GoToPreviousPage,
          NumberOfPages,
          ShowSearchPopover,
          Zoom,
          ZoomIn,
          ZoomOut,
        } = slots;
        return (
          <div
            style={{
              alignItems: "center",
              display: "flex",
            }}
          >
            <div style={{ padding: "0px 2px" }}>
              <ShowSearchPopover />
            </div>

            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <GoToPreviousPage />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <CurrentPageInput /> / <NumberOfPages />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <GoToNextPage />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomOut />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <Zoom />
            </div>
            <div style={{ padding: "0px 2px" }}>
              <ZoomIn />
            </div>
            <div style={{ padding: "0px 2px", marginLeft: "auto" }}>
              <EnterFullScreen />
            </div>
          </div>
        );
      }}
    </Toolbar>
  );

  const defaultLayoutPluginInstance = defaultLayoutPlugin({
    sidebarTabs: (defaultTabs) => [
      // Remove the attachments tab (`defaultTabs[2]`)
      defaultTabs[1], // Bookmarks tab
      // defaultTabs[1], // Thumbnails tab
    ],
    renderToolbar,
  });

  return (
    <Worker workerUrl="/pdf.worker.min.js">
      <div
        style={{
          height: 800,
        }}
      >
        <Viewer
          fileUrl={fileBook}
          defaultScale={SpecialZoomLevel.PageFit}
          plugins={[defaultLayoutPluginInstance]}
        />
      </div>
    </Worker>
  );
}
