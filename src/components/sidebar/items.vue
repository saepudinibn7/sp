<template>
	<li v-if="!children">
		<a href="#">ey</a>
	</li>
	<li v-else-if="children" class="uysa">
		<a href="#">sa</a>
      <ul class="sub-menu">
        <NavLink v-for="link in children"
          :children="link.children"
          :key="link.id"
        />
      </ul>
	</li>
</template>

<script>
export default{
	children:{type:Array , default:null}
}
</script>