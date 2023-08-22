import Button from '../components/global/Button.vue'
import TextInput from '../components/global/TextInput.vue'
import Search from '../components/global/Search.vue'
import Alert from '../components/global/Alert.vue'
import Range from '../components/global/Range.vue'
import Loader from '../components/global/Loader.vue'
import Button2 from '@/components/global/Button2.vue'
import Modal from "../components/global/Modal.vue";
import UploadInput from "../components/global/UploadInput.vue";
import SelectInput from "../components/global/SelectInput.vue";
import PhotoEditor from "../components/global/PhotoEditor.vue";
import Pagination from "../components/global/Pagination.vue";
import LineLoader from "../components/global/LineLoader.vue";


export const registerComponents = (app) => {
  app
    .component('easiButton', Button)
    .component('easiTextInput', TextInput)
    .component('easiSearch', Search)
    .component('easiAlert', Alert)
    .component('easiRange', Range)
    .component('easiLoader', Loader)
    .component('easiButton2', Button2)
    .component("easiModal", Modal)
    .component("easiUpload", UploadInput)
    .component("easiSelectInput", SelectInput)
    .component("easiEditor", PhotoEditor)
    .component("easiPaginate", Pagination)
    .component("easiLineLoarder", LineLoader)

}
