$kits = @(
    @{name="marketing"; gradient="from-blue-500/20 to-indigo-500/20"; titleGradient="from-blue-400 via-indigo-400 to-purple-400"},
    @{name="engineer"; gradient="from-emerald-500/20 to-cyan-500/20"; titleGradient="from-emerald-400 via-cyan-400 to-blue-400"},
    @{name="brand"; gradient="from-amber-500/20 to-orange-500/20"; titleGradient="from-amber-400 via-orange-400 to-yellow-400"},
    @{name="writer"; gradient="from-teal-500/20 to-green-500/20"; titleGradient="from-teal-400 via-green-400 to-emerald-400"}
)

foreach ($kit in $kits) {
    $file = "c:\SME\LandingPage\$($kit.name).html"
    $content = Get-Content $file -Raw
    
    # Find the hero section and replace with new layout
    $heroPattern = '(?s)(\s+<!-- ========== HERO SECTION ========== -->.*?</section>)'
    
    $newHero = @"
    <!-- ========== HERO SECTION ========== -->
    <section id="hero" class="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <!-- Background gradient -->
        <div class="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-[#0f0f23] to-pink-900/20"></div>

        <div class="relative max-w-6xl mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <!-- Left: Text Content -->
                <div>
                    <PLACEHOLDER_CONTENT>
                </div>

                <!-- Right: Hero Image -->
                <div class="hidden lg:flex justify-center items-center">
                    <div class="relative">
                        <div class="absolute inset-0 bg-gradient-to-r $($kit.gradient) blur-3xl"></div>
                        <img src="assets/$($kit.name)-hero.png" alt="$($kit.name.Substring(0,1).ToUpper() + $kit.name.Substring(1)) Kit Preview" 
                            class="relative rounded-2xl shadow-2xl w-full max-w-md border-2 border-white/10 animate-float">
                    </div>
                </div>
            </div>
        </div>
    </section>
"@
    
    # Extract the text content block from the existing center-aligned hero
    if ($content -match '(?s)<!-- Badge -->.*?(?=</div>\s+</section>)') {
        $textContent = $Matches[0]
        # Replace max-w-2xl mx-auto with just text-left alignment, remove justify-center
        $textContent = $textContent -replace 'text-center', ''
        $textContent = $textContent -replace 'max-w-2xl mx-auto', ''
        $textContent = $textContent -replace 'justify-center', ''
        $textContent = $textContent -replace 'flex flex-wrap justify-center gap-4', 'flex flex-wrap gap-4'
        
        $newHero = $newHero -replace '<PLACEHOLDER_CONTENT>', $textContent
    }
    
    # Apply the replacement
    $content = $content -replace $heroPattern, $new

Hero
    
    Set-Content $file $content
    Write-Host "Updated $($kit.name).html with 2-column hero layout" -ForegroundColor Green
}

Write-Host "`nAll kit pages updated successfully!" -ForegroundColor Cyan
