<template>
  <div>
    <div class="article_list">
      <Loading v-show="showLoading"></Loading>
      <ul>
        <li v-for="i in list">
          <time v-text="$utils.goodTime(i.create_at)"></time>
          <!-- 使用编辑器打开详情 -->
          <!--<router-link :to="'/uec/'+i.id">
            {{i.title}}
          </router-link>-->
          <router-link :to="'/content/'+i.id">
            {{i.title}}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
        list: []
      }
    },
    created () {
      this.getData()
    },
    computed: mapGetters([
      'showLoading'
    ]),
    methods: {
      getData () {
       /* this.$api.get('topics', null, r => {
          this.list = r.data
        }) */
        this.$axios.get('/api/v1/topics')
          .then(function (res) {
            this.list = res.data.data
          }.bind(this))
          .catch(function (err) {
            console.log(err)
          })
      }
    }
  }
</script>
